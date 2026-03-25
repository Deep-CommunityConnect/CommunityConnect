import { useEffect, useState } from "react";
import {
  Container,
  Card,
  Typography,
  Stack,
  Button,
  Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axios";

const PreviousOpportunities = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPrevious();
  }, []);

  const fetchPrevious = async () => {
    const res = await axiosInstance.get(
      "organizers/previous_opportunities/"
    );
    setData(res.data);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>

      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 4 }}
      >
        Previous Opportunities
      </Typography>

      <Stack spacing={3}>
          {data.length === 0 && (
            <Typography
              color="text.secondary"
              sx={{ textAlign: "center", mt: 4 }}
            >
              No previous opportunities found.
            </Typography>
          )}

        {data.map((item) => (
          <Card
            key={item.id}
            sx={{
              p: 3,
              borderRadius: 3
            }}
          >
            <Stack spacing={2}>

              <Typography variant="h6" sx={{ fontWeight: 600 }}>
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
                    mt: 0.5
                  }}
                >
                  {item.category.toUpperCase()}
                </Typography>
              )}

              <Box>

                <Button
                  size="small"
                  onClick={() =>
                    navigate(`/org/opportunity/${item.id}`)
                  }
                >
                  View
                </Button>

              </Box>

            </Stack>
          </Card>
        ))}
      </Stack>

    </Container>
  );
};

export default PreviousOpportunities;