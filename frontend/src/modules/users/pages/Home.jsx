import { useEffect, useState } from "react";
import {
  Container,
  Card,
  Typography,
  Button,
  Stack,
  Avatar,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axios";
import BASE_URL from "../../../config/config";

const Home = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const res = await axiosInstance.get(`users/feed/${searchQuery ? `?category=${searchQuery}` : ""}`);
        setOpportunities(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchFeed();
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: "#1a1a2e" }}>
          Find Opportunities
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by category (e.g. Education, Cleanup...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              },
            },
          }}
        />
      </Box>

      {opportunities.length === 0 ? (
        <Box sx={{ py: 10, textAlign: "center" }}>
          <Typography color="text.secondary" variant="h6">
            {searchQuery 
              ? `No opportunities found for "${searchQuery}"`
              : "There are no active opportunities available right now."}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Please check back later or try a different search.
          </Typography>
        </Box>
      ) : (
        <Stack spacing={3}>
          {opportunities.map((item) => (
            <Card
              key={item.id}
              sx={{
                p: 3,
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Stack direction="row" spacing={3} alignItems="center">
                <Avatar
                  src={`${BASE_URL}${item.organization_image}`}
                  sx={{ width: 70, height: 70 }}
                />

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    {item.organization}
                  </Typography>

                  <Typography variant="h6">
                    {item.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {item.location}
                  </Typography>

                  {item.category && (
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        backgroundColor: "#e3f2fd", 
                        color: "#1976d2", 
                        px: 1.2, 
                        py: 0.3, 
                        borderRadius: "12px",
                        fontWeight: 600,
                        display: "inline-block",
                        width: "fit-content",
                        mt: 1
                      }}
                    >
                      {item.category.toUpperCase()}
                    </Typography>
                  )}
                </Box>

                <Button
                  variant="contained"
                  onClick={() =>
                    navigate(`/opportunity/${item.id}`)
                  }
                >
                  View
                </Button>
              </Stack>
            </Card>
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default Home;