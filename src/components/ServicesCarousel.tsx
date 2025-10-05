import { useEffect, useState } from "react";
import { Box, Card, CardMedia, CardContent, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/system";

type Listing = {
  id: number;
  title: string;
  description: string;
  img:string
};

export default function ServicesCarousel({ listings }: { listings: Listing[] }) {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const height = isLgUp ? 420 : 260;

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % listings.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [listings.length, paused]);

  if (!listings || listings.length === 0) return null;

  return (
    <Box sx={{ mt: 4, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
      <Box
        sx={{ width: "100%", maxWidth: 900 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Card sx={{ overflow: "hidden" }}>
          <CardMedia
            component="img"
            height={height}
            image={listings[active].img}
            alt={listings[active].title}
            sx={{ objectFit: "cover" }}
          />
          <CardContent sx={{ bgcolor: 'rgba(78, 15, 75, 0.8)' }}>
            <Typography variant="h6" color="white" gutterBottom>
              {listings[active].title}
            </Typography>
            <Typography variant="body2" color="white">
              {listings[active].description} 
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Stack direction="row" spacing={1}>
        {listings.map((l, i) => (
          <Box
            key={l.id}
            onClick={() => setActive(i)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: i === active ? "#897FA2" : "grey.400",
              cursor: "pointer",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}