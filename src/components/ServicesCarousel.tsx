import { useEffect, useRef, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  IconButton,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Listing = {
  id: number;
  title: string;
  description: string;
  img: string;
};

export default function ServicesCarousel({ listings }: { listings: Listing[] }) {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const height = isLgUp ? 420 : 260;

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const transitionMs = 600;
  const duration = 4000;

  useEffect(() => {
    // autoplay timer
    if (paused) {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    intervalRef.current = window.setInterval(() => {
      setActive((a) => (a + 1) % listings.length);
    }, duration);
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [listings.length, paused]);

  const go = (index: number) => {
    setActive(() => {
      const next = (index + listings.length) % listings.length;
      return next;
    });
    // restart timer briefly to avoid instant change
    setPaused(true);
    window.clearInterval(intervalRef.current ?? undefined);
    // resume after one duration
    window.setTimeout(() => setPaused(false), duration);
  };

  const handlePrev = () => go(active - 1);
  const handleNext = () => go(active + 1);

  if (!listings || listings.length === 0) return null;

  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: "100%",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Box sx={{ width: "100%", maxWidth: 900, position: "relative" }}>
        {/* images (stacked) */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: typeof height === "number" ? `${height}px` : height,
            overflow: "hidden",
            borderRadius: 1,
          }}
        >
          {listings.map((l, i) => {
            const isActive = i === active;
            return (
              <img
                key={l.id}
                src={l.img}
                alt={l.title}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: typeof height === "number" ? `${height}px` : "100%",
                  objectFit: "cover",
                  transition: `opacity ${transitionMs}ms ease, transform ${transitionMs}ms ease`,
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateX(0) scale(1)" : "translateX(20px) scale(0.98)",
                  pointerEvents: isActive ? "auto" : "none",
                  zIndex: isActive ? 2 : 1,
                }}
                aria-hidden={!isActive}
              />
            );
          })}

          {/* prev / next buttons */}
          <IconButton
            onClick={handlePrev}
            size="large"
            aria-label="Anterior"
            sx={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "rgba(0,0,0,0.35)",
              color: "common.white",
              "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            size="large"
            aria-label="Próximo"
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "rgba(0,0,0,0.35)",
              color: "common.white",
              "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* info card below image */}
        <Card sx={{ overflow: "visible" }}>
          <CardContent sx={{ bgcolor: "rgba(78, 15, 75, 0.8)" }}>
            <Typography variant="h6" color="white" gutterBottom>
              {listings[active].title}
            </Typography>
            <Typography variant="body2" color="white">
              {listings[active].description}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* dots */}
      <Stack direction="row" spacing={1}>
        {listings.map((l, i) => (
          <Box
            key={l.id}
            onClick={() => go(i)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: i === active ? "#897FA2" : "#b1a7caff",
              cursor: "pointer",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}