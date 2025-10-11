import BookDialog from "./BookDialog";
import { TextField, Box, Button, Typography } from "@mui/material";

interface ContatoProps {
    contactName: string;
    setContactName: (name: string) => void;
    contactEmail: string;
    setContactEmail: (email: string) => void;
    contactMessage: string;
    setContactMessage: (message: string) => void;
    bookOpen: boolean;
    handleCloseBook: () => void;
    bookSrc: string | null;
    bookTitle: string | undefined;
}


const Contatos = ({ contactName, setContactName,
    contactEmail, setContactEmail,
    contactMessage, setContactMessage,
    bookOpen, handleCloseBook, bookSrc, bookTitle
}: ContatoProps) => {
    return (
        <>
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


            {/* Book dialog (visualização dos PDFs / books) */}
            <BookDialog open={bookOpen} onClose={handleCloseBook} src={bookSrc ?? undefined} title={bookTitle} />

            {/* FOOTER */}
            <Box sx={{ bgcolor: "#330520ff", width: "100%", color: "#aaa", py: 4, textAlign: "center", mt: 4 }}>
                <Typography variant="body2">© {new Date().getFullYear()} Mônica de Souza — Corretora CRECI-AM 7646 PF. Todos os direitos reservados.</Typography>
            </Box>
        </>
    )
}

export default Contatos;