// Portifolio_Corretora_MUI.jsx
// Versão com Material UI (MUI) em vez de Tailwind CSS
// Para usar:
// 1. Instale: npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
// 2. Substitua este arquivo em seu projeto React.

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Paper,
  Avatar, Stack
} from "@mui/material";
import ServicesCarousel from "./components/ServicesCarousel";
// @ts-ignore
import Grid from "@mui/material/Grid";
import AutoPlayVideo from "./components/AutoPlayVideo";
import BookDialog from "./components/BookDialog";
import { useState } from "react";

//import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useMediaQuery, useTheme } from "@mui/system";

export default function App() {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const opacityTarget = isLgUp ? 0.0 : 0.5;

  const listServices = [
    {
      id: 1,
      title: "Consultoria Imobiliária",
      description: "Seleção personalizada de imóveis conforme suas necessidades.",
      img: '/meu-portifolio/img/servico-1.jpeg'
    },
    {
      id: 2,
      title: "Venda & Compra",
      description: "Ajudo compradores e vendedores com as melhores condições.",
      img: '/meu-portifolio/img/servico-2.jpeg'
    },
    {
      id: 3,
      title: "Imóvel na planta",
      description: "Especialista em lançamentos — da planta à entrega.",
      img: '/meu-portifolio/img/servico-3.jpeg'
    },
    {
      id: 4,
      title: "Financiamento",
      description: "Auxílio completo com bancos e documentação..",
      img: '/meu-portifolio/img/servico-4.jpeg'
    },
  ]

  const listings = [
    {
      id: 1,
      title: "Horizonte - Ponta Negra",
      subtitle: "Apartamentos de 2 e 3 quartos.",
      price: "R$ 488.169,00",
      area: "63,75 e 77,34 m²",
      lot: "17.883,37 m²",
      img: "/meu-portifolio/img/Destaque-1.jpeg",
      book: "https://drive.google.com/file/d/1Qiy7be8wVwfFlCu5IWh9XUYbUvnMoT_7/preview", // coloque o PDF correspondente em public/meu-portifolio/books/
    },
    {
      id: 2,
      title: "Tower Mosaico - Planalto",
      subtitle: "Apartamento de 2 quartos.",
      price: "R$ 297.400,00",
      area: "46,60 m²",
      lot: "11.129,49 m²",
      img: "/meu-portifolio/img/Destaque-2.jpeg",
      book: "https://drive.google.com/file/d/1Ttns9TI9IxL9EHWFZJuxQOu4cAJrdFKE/preview",
    },
    {
      id: 3,
      title: "Realize Mosaico - Planalto",
      subtitle: "Apartamentos de 2 e 3 quartos.",
      price: "R$ 219.600,00",
      area: "40,60 e 48,43 m²",
      lot: "22.356,31 m²",
      img: "/meu-portifolio/img/Destaque-3.jpeg",
      book: "https://drive.google.com/file/d/17G-6gBItGXpmOYuMiKBPMYMM_rkVTH8U/preview",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Yara S.",
      text: "Atendimento exemplar e aprovação rápida do financiamento pela Caixa.",
    },
    {
      id: 2,
      name: "Mariana R.",
      text: "Ajudou a encontrar o imóvel ideal e acompanhou todo o processo.",
    },
  ];

  const [bookOpen, setBookOpen] = useState(false);
  const [bookSrc, setBookSrc] = useState<string | null>(null);
  const [bookTitle, setBookTitle] = useState<string | undefined>(undefined);

  const handleOpenBook = (src?: string, title?: string) => {
    if (!src) return;
    setBookSrc(src);
    setBookTitle(title);
    setBookOpen(true);
  };
  const handleCloseBook = () => {
    setBookOpen(false);
    setBookSrc(null);
    setBookTitle(undefined);
  };

  return (
    <Box sx={{ bgcolor: "#d8bed5ff", width: "100vw", minHeight: "100vh", alignItems: "center", justifyContent: "center", justifyItems: "center" }}>
      {/* NAVBAR */}
      <AppBar sx={{ bgcolor: '#897FA2' }} position="static" color="default" elevation={1}>
        <Toolbar sx={{ height: { xs: "auto", md: 170 }, justifyContent: "space-between", alignItems: "center", py: { xs: 2, md: 0 } }}>

          <Box sx={{ p: 1, m: 1, width: '100%' }} justifyContent="space-between" alignItems="center">
            <Box display="flex" sx={{ pb: 2 }} alignItems="center" gap={2}>
              <Avatar sx={{ height: 80, width: 80 }} src="/meu-portifolio/img/profile.jpg" />
              <Box>
                <Typography variant="h6" color="white">Mônica Souza — Corretora</Typography>
                <Typography variant="body2" color="white">
                  CRECI AM 7646 • Imóvel na planta e venda residencial
                </Typography>
              </Box>
            </Box>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={1}
              alignItems="right"
              sx={{ width: { xs: "100%", md: "auto" } }}
            >
              <Box display="flex" gap={1} flexWrap="wrap" sx={{ width: '100%', justifyContent: 'right', justifyItems: 'right' }} justifyContent={{ xs: "center", md: "flex-end" }}>
                <Button color="secondary" variant="contained" href="#destaques">Destaques</Button>
                <Button color="secondary" variant="contained" href="#servicos">Serviços</Button>
                <Button color="secondary" variant="contained" href="#depoimentos">Depoimentos</Button>
                <Button color="secondary" variant="contained" href="#contato">Contato</Button>
                <Button color="secondary" variant="contained" startIcon={<PhoneIcon />} href="tel:+5592986093554">
                  (92) 98609-3554
                </Button>
                <Button startIcon={<EmailIcon />} variant="contained" color="primary" href="mailto:corretora.msouza@gmail.com">
                  Mensagem
                </Button>
              </Box>
            </Stack>
          </Box>


          {/* Área de botões: empilha em coluna no xs/tablet e fica em linha no desktop */}

        </Toolbar>
      </AppBar>

      {/* HERO */}
      <Box sx={{
        backgroundColor: "#504078", backgroundImage: `url('/meu-portifolio/img/imagem-cortada.png')`,
        backgroundSize: "auto 130%", backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        color: "white", py: 10, width: "100%"
      }}>
        <Container>
          <Box alignItems="center">
            <Box sx={{ ml: 1 }} width={{ xs: "100%", md: "70%" }} textAlign="left">
              <Card sx={{ bgcolor: `rgba(78, 15, 75, ${opacityTarget})`, color: 'white', p: 1 }}>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  Encontre seu próximo lar com quem entende do mercado de Manaus!
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }} gutterBottom>
                  Sou Mônica de Souza — corretora especializada em imóveis na planta, financiamento pela Caixa Economica Federal. Atendimento personalizado para famílias e investidores.
                </Typography>
                <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                  <Button variant="contained" color="secondary" href="#destaques">
                    Ver imóveis
                  </Button>
                  <Button variant="outlined" color="inherit" href="mailto:corretora.msouza@gmail.com">
                    Entrar em contato por email
                  </Button>

                </Box>
              </Card>
            </Box>

          </Box>
        </Container>
      </Box >

      {/* DESTAQUES */}

      <Container id="destaques" sx={{ maxWidth: 1200, pl: 5, pr: 5, pt: 8, pb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Destaques
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Confira as novidades e oportunidades que selecionei para você.
        </Typography>

        <Box textAlign="center" sx={{ width: '100%', mt: 4 }}>
          <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
            Aqui você encontra lazer completo, segurança e tranquilidade para você e sua família !
          </Typography>
          <AutoPlayVideo src="/meu-portifolio/media/destaque-video-2.mp4" poster="/meu-portifolio/img/servico-2.jpeg" />
        </Box>
        
        <Grid container spacing={3} sx={{ mt: 2, justifyContent: "center" }}>
          {listings.map((l) => (
            <Grid key={l.id} maxWidth={350} width='100%'>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'end',
                  overflow: 'hidden', // garante que o zoom não quebre o layout
                  borderRadius: 2,
                  // ao passar o mouse no card, aplica transform na imagem com classe .card-image
                  '&:hover .card-image': {
                    transform: 'scale(1.06)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height={350}
                  image={l.img}
                  alt={l.title}
                  className="card-image"
                  sx={{
                    transition: 'transform 500ms ease',
                    willChange: 'transform',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />

                <CardContent sx={{ color: 'white', bgcolor: 'rgba(78, 15, 75, 0.8)', alignContent: 'end', height: 200 }}>
                  <Typography variant="h5">{l.title}</Typography>
                  <Typography variant="body1"><strong>{l.subtitle}</strong></Typography>
                  <Typography color="#e895f7ff" fontWeight={700}>{l.price}</Typography>
                  <Typography variant="body2" color="white">
                    Área: {l.area} • Terreno: {l.lot}
                  </Typography>
                  <Box mt={2} display="flex" gap={1}>
                    <Button
                      variant="outlined"
                      color="inherit"
                      size="small"
                      onClick={() => handleOpenBook(l.book, l.title)}
                    >
                      Mais informações
                    </Button>
                    <Button variant="outlined" color="inherit" size="small" href="#contato">
                      Agendar visita
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" sx={{ width: '100%', mt: 4 }}>
          <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
            Conquiste este sonho pelo programa Minha Casa Minha Vida !
          </Typography>

          <AutoPlayVideo src="/meu-portifolio/media/destaque-video.mp4" poster="/meu-portifolio/img/servico-2.jpeg" />

        </Box>
        {/* Vídeo que toca automaticamente quando a seção fica em foco.
            Coloque o arquivo .mp4 em public/meu-portifolio/media/ e ajuste o src abaixo. */}


      </Container>

       {/* SERVIÇOS */}
      <Container id="servicos" sx={{ maxWidth: 1200, ml: 5, mr: 5, pt: 8, pb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Serviços
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Consultoria completa: seleção de imóveis, visita, negociação e apoio no financiamento.
        </Typography>

        {/* Carousel component */}
        <ServicesCarousel listings={listServices} />
      </Container >


      {/* DEPOIMENTOS */}

      <Container id="depoimentos" sx={{ maxWidth: 1200, pl: 5, pr: 5, pt: 8, pb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Depoimentos
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          O que dizem os nossos clientes.
        </Typography>
        <Stack width={{ xs: "100%" }} textAlign="left" sx={{ mt: 2 }}>
          {testimonials.map((t) => (
            <Box key={t.id} display="flex" sx={{ justifyItems: 'center', justifyContent: 'center' }} alignItems="center" gap={2} mb={3}>
              <Paper elevation={2} sx={{ p: 3, Width: '100%' }}>
                <Typography variant="body1">“{t.text}”</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  — {t.name}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Stack>
      </Container>


      {/* CONTATO */}
      < Container id="contato" sx={{ maxWidth: 1200, pl: 5, pr: 5, pt: 8, pb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Contato
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Não se acanhe, mesmo que seja para tirar dúvidas, entre em contato!
        </Typography>
        <Grid container spacing={4}>
          <Grid>
            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
              <Typography variant="body2" color="text.secondary">
                Telefone / WhatsApp
              </Typography>
              <Typography variant="h6">(92) 98609-3554</Typography>
            </Paper>
            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
              <Typography variant="body2" color="text.secondary">
                E-mail
              </Typography>
              <Typography variant="h6">corretora.msouza@gmail.com</Typography>
            </Paper>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="body2" color="text.secondary">
                CRECI
              </Typography>
              <Typography variant="h6">AM 7646</Typography>
            </Paper>
          </Grid>

          <Grid>
            <Paper elevation={2} sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Envie uma mensagem
              </Typography>
              <Box component="form" onSubmit={(e) => e.preventDefault()}>
                <TextField label="Seu nome" fullWidth margin="normal" />
                <TextField label="Telefone ou WhatsApp" fullWidth margin="normal" />
                <TextField label="Mensagem" fullWidth multiline rows={4} margin="normal" />
                <Box display="flex" gap={2} mt={2}>
                  <Button type="submit" variant="contained">
                    Enviar
                  </Button>
                  <Button variant="outlined" href="mailto:corretora.msouza@gmail.com">
                    Enviar por e-mail
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container >

      {/* FOOTER */}
      < Box sx={{ bgcolor: "#111", width: "100%", color: "#aaa", py: 4, textAlign: "center" }}>
        <Typography variant="body2">© {new Date().getFullYear()} Mônica Souza — Corretora. Todos os direitos reservados.</Typography>
      </Box >
      {/* Book dialog (visualização dos PDFs / books) */}
      <BookDialog open={bookOpen} onClose={handleCloseBook} src={bookSrc ?? undefined} title={bookTitle} />
    </Box >
  );
}
