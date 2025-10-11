import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface sessaoProps {
  id: string;
  titulo: string;
  subtitulo?: string;
  children: React.ReactNode;
}

export default function Sessao ({id, titulo, subtitulo, children}: sessaoProps) {
  return (
    <Container id={id} sx={{ maxWidth: 1200, ml: 5, mr: 5, pt: 6, pb: 4 }}>
        <Typography variant="h4" gutterBottom>
            {titulo}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
            {subtitulo}
        </Typography>
        {children}
    </Container>
  )
}