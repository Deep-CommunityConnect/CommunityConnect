import { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Stack,
  Avatar,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import axiosInstance from "../../../api/axios";
import BASE_URL from "../../../config/config";
import SubmitLoader from "../../../components/common/SubmitLoader";
import {
  VALIDATION_RULES,
  VALIDATION_MESSAGES,
} from "../../../constants/validationConstants";

const OrganizerProfile = () => {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  // Check if form is valid for enabling submit button
  const isFormValid = () => {
    const editableFields = ['name', 'contact_email', 'contact_phone', 'website', 'address', 'bio'];
    for (const field of editableFields) {
      if (fieldErrors[field]?.length > 0) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axiosInstance.get("organizers/profile/");
      setProfile(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const validateField = (name, value) => {
    const errors = [];

    switch (name) {
      case "name":
        if (value && value.length < VALIDATION_RULES.NAME.minLength) {
          errors.push(VALIDATION_MESSAGES.NAME_TOO_SHORT);
        } else if (value && value.length > VALIDATION_RULES.NAME.maxLength) {
          errors.push(VALIDATION_MESSAGES.NAME_TOO_LONG);
        } else if (value && !VALIDATION_RULES.NAME.pattern.test(value)) {
          errors.push(VALIDATION_MESSAGES.NAME_INVALID);
        }
        break;

      case "contact_email":
        if (value && !VALIDATION_RULES.EMAIL.pattern.test(value)) {
          errors.push(VALIDATION_MESSAGES.EMAIL_INVALID);
        }
        break;

      case "contact_phone":
        if (value && !/^\d{12}$/.test(value)) {
          errors.push("Phone number must be exactly 12 digits");
        }
        break;

      case "website":
        if (value && !/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(value)) {
          errors.push("Please enter a valid website URL");
        }
        break;

      case "address":
        if (value && value.length > 200) {
          errors.push("Address must be less than 200 characters");
        }
        break;

      case "bio":
        if (value && value.length > 500) {
          errors.push("Bio must be less than 500 characters");
        }
        break;

      default:
        break;
    }

    return errors;
  };

  const handleChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value,
    }));

    // Validate field in real-time
    const errors = validateField(field, value);
    setFieldErrors(prev => ({
      ...prev,
      [field]: errors,
    }));
    setTouchedFields(prev => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleBlur = (field) => {
    setTouchedFields(prev => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("name", profile.name);
    formData.append("bio", profile.bio || "");
    formData.append("website", profile.website || "");
    formData.append("address", profile.address || "");
    formData.append("contact_email", profile.contact_email || "");
    formData.append("contact_phone", profile.contact_phone || "");

    if (profile.image instanceof File) {
      formData.append("image", profile.image);
    }

    setIsSaving(true);

    try {
      await axiosInstance.put("organizers/profile/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSnackbar({
        open: true,
        message: "Profile updated successfully",
        severity: "success",
      });

      setEditMode(false);
      fetchProfile();
    } catch (err) {
      let message = "Update failed";

      if (err.response?.data) {
        message = Object.entries(err.response.data)
          .map(([field, msgs]) =>
            `${field}: ${
              Array.isArray(msgs) ? msgs.join(", ") : msgs
            }`
          )
          .join(" | ");
      }

      setSnackbar({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (!profile) return null;

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper sx={{ p: 5 }}>
        <Stack spacing={3} alignItems="center">
          <Avatar
            src={
              profile.image
                ? `${BASE_URL}${profile.image}`
                : ""
            }
            sx={{ width: 120, height: 120 }}
          />

          {editMode && (
            <Button variant="outlined" component="label">
              Change Photo
              <input
                hidden
                type="file"
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    image: e.target.files[0],
                  })
                }
              />
            </Button>
          )}

          <Stack spacing={2} width="100%">
            <TextField
              label="Organization Name"
              fullWidth
              value={profile.name || ""}
              slotProps={{
                input: {
                  readOnly: !editMode,
                },
              }}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              error={touchedFields.name && fieldErrors.name?.length > 0}
              helperText={touchedFields.name && fieldErrors.name?.[0]}
            />

            <TextField
              label="Login Email"
              fullWidth
              value={profile.email || ""}
              slotProps={{
                input: {
                  readOnly: !editMode,
                },
              }}
            />

            <TextField
              label="Contact Email"
              fullWidth
              value={profile.contact_email || ""}
              slotProps={{
                input: {
                  readOnly: !editMode,
                },
              }}
              onChange={(e) => handleChange("contact_email", e.target.value)}
              onBlur={() => handleBlur("contact_email")}
              error={touchedFields.contact_email && fieldErrors.contact_email?.length > 0}
              helperText={touchedFields.contact_email && fieldErrors.contact_email?.[0]}
            />

            <TextField
              label="Contact Phone"
              fullWidth
              value={profile.contact_phone || ""}
              slotProps={{
                input: {
                  readOnly: !editMode,
                },
              }}
              onChange={(e) => handleChange("contact_phone", e.target.value)}
              onBlur={() => handleBlur("contact_phone")}
              error={touchedFields.contact_phone && fieldErrors.contact_phone?.length > 0}
              helperText={touchedFields.contact_phone && fieldErrors.contact_phone?.[0]}
            />

            <TextField
              label="Website"
              fullWidth
              value={profile.website || ""}
              slotProps={{
                input: {
                  readOnly: !editMode,
                },
              }}
              onChange={(e) => handleChange("website", e.target.value)}
              onBlur={() => handleBlur("website")}
              error={touchedFields.website && fieldErrors.website?.length > 0}
              helperText={touchedFields.website && fieldErrors.website?.[0]}
            />

            <TextField
              label="Address"
              fullWidth
              multiline
              rows={2}
              value={profile.address || ""}
              slotProps={{
                input: {
                  readOnly: !editMode,
                },
              }}
              onChange={(e) => handleChange("address", e.target.value)}
              onBlur={() => handleBlur("address")}
              error={touchedFields.address && fieldErrors.address?.length > 0}
              helperText={touchedFields.address && fieldErrors.address?.[0]}
            />

            <TextField
              label="Bio"
              fullWidth
              multiline
              rows={3}
              value={profile.bio || ""}
              slotProps={{
                input: {
                  readOnly: !editMode,
                },
              }}
              onChange={(e) => handleChange("bio", e.target.value)}
              onBlur={() => handleBlur("bio")}
              error={touchedFields.bio && fieldErrors.bio?.length > 0}
              helperText={touchedFields.bio && fieldErrors.bio?.[0]}
            />
          </Stack>

          {editMode ? (
            <SubmitLoader
              loading={isSaving}
              loadingText="Saving..."
              onClick={handleUpdate}
              disabled={!isFormValid()}
              sx={{ minWidth: 140 }}
            >
              Save Changes
            </SubmitLoader>
          ) : (
            <Button
              variant="contained"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </Button>
          )}
        </Stack>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() =>
          setSnackbar({ ...snackbar, open: false })
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default OrganizerProfile;