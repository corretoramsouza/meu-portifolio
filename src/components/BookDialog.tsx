import { Dialog, DialogTitle, DialogContent, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  open: boolean;
  onClose: () => void;
  src?: string;
  title?: string;
};

export default function BookDialog({ open, onClose, src, title }: Props) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      <DialogTitle sx={{ bgcolor: "rgba(78, 15, 75, 0.8)", color: "white" }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">{title ?? "Book"}</Typography>
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 0 }}>
        {src ? (
          // iframe para visualizar PDF/HTML/images colocados em public/meu-portifolio/books
          <Box sx={{ width: "100%", height: { xs: "60vh", md: "80vh" } }}>
            <iframe
              src={src}
              title={title ?? "Book preview"}
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </Box>
        ) : (
          <Box sx={{ p: 3 }}>
            <Typography>Arquivo não encontrado. Coloque o PDF em public/meu-portifolio/books/ e atualize o caminho em listings.</Typography>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}