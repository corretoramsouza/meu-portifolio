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
// @ts-ignore
import Grid from "@mui/material/Grid";

//import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useMediaQuery, useTheme } from "@mui/system";

export default function App() {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const opacityTarget = isLgUp ? 0.0 : 0.5;

  const listings = [
    {
      id: 1,
      title: "Apartamento 3 quartos - Ponta Negra",
      price: "R$ 480.000",
      area: "71 m²",
      lot: "9x25",
      img: "https://via.placeholder.com/800x600?text=Imovel+1",
    },
    {
      id: 2,
      title: "Casa térrea - Tarumã",
      price: "R$ 650.000",
      area: "120 m²",
      lot: "10x30",
      img: "https://via.placeholder.com/800x600?text=Imovel+2",
    },
    {
      id: 3,
      title: "Studio moderno - Centro",
      price: "R$ 320.000",
      area: "38 m²",
      lot: "—",
      img: "https://via.placeholder.com/800x600?text=Imovel+3",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Carlos M.",
      text: "Atendimento exemplar e aprovação rápida do financiamento pela Caixa.",
    },
    {
      id: 2,
      name: "Ana R.",
      text: "Ajudou a encontrar o imóvel ideal e acompanhou todo o processo.",
    },
  ];

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
                <Button color="secondary" variant="contained" href="#servicos">Serviços</Button>
                <Button color="secondary" variant="contained" href="#destaques">Destaques</Button>
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

      {/* SERVIÇOS */}
      < Container id="servicos" sx={{ maxWidth: 1200, ml: 5, mr: 5, pt: 8, pb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Serviços
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Consultoria completa: seleção de imóveis, visita, negociação e apoio no financiamento.
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2, justifyContent: "center", justifyItems: "center" }}>
          {["Venda & Compra", "Imóvel na planta", "Financiamento"].map((title, i) => (
            <Grid key={i} sx={{ width: '100%', maxWidth: 350 }} >
              <Paper elevation={2} sx={{ p: 3, width: '100%' }}>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {i === 0 && "Ajudo compradores e vendedores com as melhores condições."}
                  {i === 1 && "Especialista em lançamentos — da planta à entrega."}
                  {i === 2 && "Auxílio completo com bancos e documentação."}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container >

      {/* DESTAQUES */}

      <Container id="destaques" sx={{ maxWidth: 1200, pl: 5, pr: 5, pt: 8, pb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Destaques
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Confira as novidades e oportunidades que selecionei para você.
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2, justifyContent: "center" }}>
          {listings.map((l) => (
            <Grid key={l.id} maxWidth={350} width='100%'>
              <Card>
                <CardMedia component="img" height="180" image={l.img} alt={l.title} />
                <CardContent>
                  <Typography variant="h6">{l.title}</Typography>
                  <Typography color="primary" fontWeight={700}>{l.price}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Área: {l.area} • Terreno: {l.lot}
                  </Typography>
                  <Box mt={2} display="flex" gap={1}>
                    <Button size="small" variant="outlined" href={`mailto:corretora.msouza@gmail.com?subject=Interesse%20no%20${encodeURIComponent(l.title)}`}>
                      Mais informações
                    </Button>
                    <Button size="small" variant="contained" href="#contato">
                      Agendar visita
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>


      {/* DEPOIMENTOS */}
      
        <Container id="depoimentos" sx={{ maxWidth: 1200, pl: 5, pr: 5, pt: 8, pb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Depoimentos
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
          O que dizem os nossos clientes.
        </Typography>
          <Stack width={{ xs: "100%" }} textAlign="left" sx={{ mt: 2 }}>
            {testimonials.map((t)=>(
              <Box key={t.id} display="flex" sx={{justifyItems: 'center', justifyContent: 'center'}} alignItems="center" gap={2} mb={3}>
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
      < Container  id="contato" sx={{ maxWidth: 1200, pl: 5, pr: 5, pt: 8, pb: 4 }}>
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
    </Box >
  );
}
