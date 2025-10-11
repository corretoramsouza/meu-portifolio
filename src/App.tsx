
import {
  Box
} from "@mui/material";
import ServicesCarousel from "./components/ServicesCarousel";
// @ts-ignore
import Grid from "@mui/material/Grid";
import { useState } from "react";
import ListingGrid from "./components/ListingGrid";

import { useMediaQuery, useTheme } from "@mui/system";
import { listServices, listings, listProducts, listParceiros, depoimentos } from "./fonteDeDados";
import Sessao from "./components/Sessao";
import VideosPlayer from "./components/VideosPlayer";
import ImobiliariaParceira from "./components/ImobiliariaParceira";
import ListDepoimento from "./components/ListDepoimentos";
import Contatos from "./components/Contato";
import MenuTop from "./components/MenuTop";
import MyHead from "./components/MyHead";

export default function App() {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const opacityTarget = isLgUp ? 0.0 : 0.5;
  const [bookOpen, setBookOpen] = useState(false);
  const [bookSrc, setBookSrc] = useState<string | null>(null);
  const [bookTitle, setBookTitle] = useState<string | undefined>(undefined);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [allDepoimentos, setAlldepoimentos] = useState(depoimentos);

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
      <MenuTop/>

      {/* HERO */}
      <MyHead opacityTarget={opacityTarget} />

      {/* DESTAQUES */}
      <Sessao id="destaques" titulo="Destaques" subtitulo="Confira as novidades e oportunidades que selecionei para você.">
        <VideosPlayer enunciado="Aqui você encontra lazer completo, segurança e tranquilidade para você e sua família !"
          videoUrl="/meu-portifolio/media/destaque-video-2.mp4"
          posterUrl="/meu-portifolio/img/servico-2.jpeg" />

        <ListingGrid listings={listings} onOpenBook={handleOpenBook} />

        <VideosPlayer enunciado="Conquiste este sonho pelo programa Minha Casa Minha Vida !"
          videoUrl="/meu-portifolio/media/destaque-video.mp4"
          posterUrl="/meu-portifolio/img/servico-2.jpeg" />
      </Sessao>

      {/* Servicos */}
      <Sessao id="servicos" titulo="Serviços" subtitulo="Veja como posso ajudar você a encontrar o imóvel ideal.">
        <ServicesCarousel listings={listServices} />
      </Sessao>

      {/* PRODUTOS */}
      <Sessao id="produtos" titulo="Produtos" subtitulo="Conheça nosso catálogo de imóveis.">
        <ListingGrid listings={listProducts} onOpenBook={handleOpenBook} />
      </Sessao>


      {/* CONSTRUTORAS PARCEIRAS */}
      <Sessao id="construtoras" titulo="Construtoras Parceiras" subtitulo="Conheça as construtoras com as quais trabalho.">
        <ListingGrid
          listings={listParceiros}
          onOpenBook={handleOpenBook}
          cardHeight={250}
          cardContentHeight={150}
          cardBgColor="#504078"
        />
      </Sessao>

      {/* Imobiliária parceira */}

      <Sessao id="imobiliariaParceira" titulo="Imobiliária Parceira" subtitulo="Trabalhando com transparência e compromisso para realizar o sonho da casa própria.">
        <ImobiliariaParceira />
      </Sessao>

      {/* DEPOIMENTOS */}
      <Sessao id="depoimentos" titulo="Depoimentos" subtitulo="O que meus clientes dizem.">
        <ListDepoimento
          allDepoimentos={allDepoimentos}
          onSubmit={
            (e: React.FormEvent) => {
              e.preventDefault();
            if (!contactName || !contactMessage) return;
            setAlldepoimentos((s) => [...s, { id: Date.now(), name: contactName, text: contactMessage }]);
            setContactName(""); setContactMessage(""); setContactEmail("");
          }}
          contactName={contactName}
          setContactName={setContactName}
          contactMessage={contactMessage}
          setContactMessage={setContactMessage}
        />
      </Sessao>

      {/* CONTATO */}
      <Sessao id="contato" titulo="Contato" subtitulo="Entre em contato para agendar visitas ou tirar dúvidas.">
          <Contatos contactName={contactName} setContactName={setContactName}
            contactEmail={contactEmail} setContactEmail={setContactEmail}
            contactMessage={contactMessage} setContactMessage={setContactMessage}
            bookOpen={bookOpen} handleCloseBook={handleCloseBook} bookSrc={bookSrc} bookTitle={bookTitle}
            />
      </Sessao>
    </Box>
  );
}
