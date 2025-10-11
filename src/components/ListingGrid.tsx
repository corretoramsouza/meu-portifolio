import { Grid, Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";

export type Listing = {
  id: number;
  title: string;
  subtitle?: string;
  price?: string;
  area?: string;
  lot?: string;
  img: string;
  book?: string;
};

export default function ListingGrid({
  listings,
  onOpenBook,
  cardHeight = 350,
  cardContentHeight = 200,
  cardBgColor = "rgba(78, 15, 75, 0.8)",
  textAlign = "left"
}: {
  listings: Listing[];
  onOpenBook?: (src?: string, title?: string) => void;
  cardHeight?: number;
  cardContentHeight?: number;
  cardBgColor?: string;
  textAlign?: "left" | "center" | "right";
}) {
  return (
    <Grid container spacing={3} sx={{ mt: 2, justifyContent: "center" }}>
      {listings.map((l) => (
        <Grid key={l.id} maxWidth={350} width="100%">
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              overflow: "hidden",
              borderRadius: 2,
              "&:hover .card-image": {
                transform: "scale(1.06)",
              },
            }}
          >
            <CardMedia
              component="img"
              height={cardHeight}
              image={l.img}
              alt={l.title}
              className="card-image"
              sx={{
                transition: "transform 500ms ease",
                willChange: "transform",
                display: "block",
                objectFit: "cover",
              }}
            />

            <CardContent sx={{ color: "white", bgcolor: cardBgColor, alignContent: "end", height: cardContentHeight }}>
              <Typography variant="h5">{l.title}</Typography>
              {l.subtitle && <Typography variant="body1"><strong>{l.subtitle}</strong></Typography>}
              {l.price && <Typography color="#e895f7ff" fontWeight={700}>{l.price}</Typography>}
              <Typography variant="body2" color="white">
                {l.area ? `Área: ${l.area}` : ""}{l.area && l.lot ? " • " : ""}{l.lot ?? ""}
              </Typography>
              <Box mt={2} display="flex" gap={1} sx={{ textAlign: textAlign, alignItems: textAlign, justifyContent: textAlign, justifyItems: textAlign }}>
                {l.book && 
                  <Button
                  variant="outlined"
                  color="inherit"
                  size="small"
                  onClick={() => onOpenBook?.(l.book, l.title)}
                >
                  Mais informações
                </Button>
                }
                
                <Button variant="outlined" color="inherit" size="small" href="#contato">
                  Agendar visita
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}