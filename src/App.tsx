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
  TextField,
  Paper,
  Avatar, Stack, Link
} from "@mui/material";
import ServicesCarousel from "./components/ServicesCarousel";
// @ts-ignore
import Grid from "@mui/material/Grid";
import AutoPlayVideo from "./components/AutoPlayVideo";
import BookDialog from "./components/BookDialog";
import { useState } from "react";
import ListingGrid from "./components/ListingGrid";
import { imobiliariaParceira } from "./fonteDeDados";

//import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useMediaQuery, useTheme } from "@mui/system";
import { listServices, listings, listProducts, listParceiros, testimonials } from "./fonteDeDados";

export default function App() {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const opacityTarget = isLgUp ? 0.0 : 0.5;
  const [bookOpen, setBookOpen] = useState(false);
  const [bookSrc, setBookSrc] = useState<string | null>(null);
  const [bookTitle, setBookTitle] = useState<string | undefined>(undefined);

  // Contact + Testimonials local state (adicionado)
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [testimonialsLocal, setTestimonialsLocal] = useState(testimonials);

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
                  CRECI AM 7646 • Imóvel na planta e venda residencial.
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

        <ListingGrid listings={listings} onOpenBook={handleOpenBook} />

        <Box textAlign="center" sx={{ width: '100%', mt: 4 }}>
          <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
            Conquiste este sonho pelo programa Minha Casa Minha Vida !
          </Typography>

          <AutoPlayVideo src="/meu-portifolio/media/destaque-video.mp4" poster="/meu-portifolio/img/servico-2.jpeg" />

        </Box>
        {/* Vídeo que toca automaticamente quando a seção fica em foco.
            Coloque o arquivo .mp4 em public/meu-portifolio/media/ e ajuste o src abaixo. */}


      </Container>


      {/* Produtos */}
      <Container id="produtos" sx={{ maxWidth: 1200, ml: 5, mr: 5, pt: 8, pb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Produtos
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Conheça nosso catálogo de imóveis.
        </Typography>

        {/* Lista de produto vertical */}
        <ListingGrid listings={listProducts} onOpenBook={handleOpenBook} />
      </Container >

      {/* CONSTRUTORAS PARCEIRAS */}
      <Container id="construtoras" sx={{ maxWidth: 1200, ml: 5, mr: 5, pt: 6, pb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Construtoras Parceiras
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Conheça as construtoras com as quais trabalho.
        </Typography>
        <ListingGrid
          listings={listParceiros}
          onOpenBook={handleOpenBook}
          cardHeight={250}
          cardContentHeight={150}
          cardBgColor="#504078"
        />
      </Container>

      {/* Imobiliária parceira — MANTER APENAS ESTE BLOCO (removida duplicata do final do arquivo) */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2,
          bgcolor: "rgba(78,15,75,0.06)",
          borderRadius: 1,
          mt: 3,
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Avatar
          src={imobiliariaParceira.logo}
          alt={imobiliariaParceira.name}
          sx={{ width: 80, height: 80 }}
        />
        <Box>
          <Typography variant="h6">{imobiliariaParceira.name}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 800 }}>
            {imobiliariaParceira.description}
          </Typography>

          <Box sx={{ mt: 1, display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
            <Link href={imobiliariaParceira.phone} color="inherit" underline="none">Contato</Link>
            <Link href={imobiliariaParceira.email} color="inherit" underline="none">E-mail</Link>
            {imobiliariaParceira.website && (
              <Link href={imobiliariaParceira.website} target="_blank" rel="noopener" color="inherit">Site</Link>
            )}
          </Box>
        </Box>
      </Box>

      {/* DEPOIMENTOS */}
      <Container id="depoimentos" sx={{ maxWidth: 1200, ml: 5, mr: 5, pt: 6, pb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Depoimentos
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          O que meus clientes dizem.
        </Typography>

        <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, mt: 2 }}>
          {testimonialsLocal.map((t) => (
            <Paper key={t.id} elevation={1} sx={{ p: 2 }}>
              <Typography variant="subtitle1" fontWeight={700}>
                {t.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t.text}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* formulário rápido de envio de depoimento */}
        <Box component="form" onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            if (!contactName || !contactMessage) return;
            setTestimonialsLocal((s) => [...s, { id: Date.now(), name: contactName, text: contactMessage }]);
            setContactName(""); setContactMessage(""); setContactEmail("");
          }} sx={{ mt: 3, display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" } }}>
          <TextField label="Seu nome" value={contactName} onChange={(e) => setContactName(e.target.value)} fullWidth />
          <TextField label="Mensagem" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} fullWidth />
          <Button type="submit" variant="contained" color="secondary">Enviar depoimento</Button>
        </Box>
      </Container>

      {/* CONTATO */}
      <Container id="contato" sx={{ maxWidth: 1200, ml: 5, mr: 5, pt: 6, pb: 6 }}>
        <Typography variant="h4" gutterBottom>Contato</Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Entre em contato para agendar visitas ou tirar dúvidas.
        </Typography>

        <Box component="form" onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            // abre cliente de email como fallback; você pode trocar para API
            const subject = encodeURIComponent("Contato pelo site - " + (contactName || "Interessado"));
            const body = encodeURIComponent(`${contactMessage}\n\nContato: ${contactEmail}`);
            window.location.href = `mailto:corretora.msouza@gmail.com?subject=${subject}&body=${body}`;
            setContactName(""); setContactEmail(""); setContactMessage("");
          }} sx={{ mt: 2, display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
          <TextField label="Nome" value={contactName} onChange={(e) => setContactName(e.target.value)} required fullWidth />
          <TextField label="Email ou telefone" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required fullWidth />
          <TextField label="Mensagem" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} multiline rows={4} sx={{ gridColumn: "1 / -1" }} />
          <Box sx={{ gridColumn: "1 / -1", display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit" variant="contained" color="secondary">Enviar</Button>
          </Box>
        </Box>
      </Container>

      {/* Book dialog (visualização dos PDFs / books) */}
      <BookDialog open={bookOpen} onClose={handleCloseBook} src={bookSrc ?? undefined} title={bookTitle} />

      {/* FOOTER */}
      <Box sx={{ bgcolor: "#330520ff", width: "100%", color: "#aaa", py: 4, textAlign: "center", mt: 4 }}>
        <Typography variant="body2">© {new Date().getFullYear()} Mônica de Souza — Corretora CRECI-AM 7646 PF. Todos os direitos reservados.</Typography>
      </Box>
    </Box>
  );
}
