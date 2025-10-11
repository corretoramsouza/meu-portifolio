import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import type { Depoimento } from "../fonteDeDados";

interface listDepoimentosProps {
    allDepoimentos: Depoimento[];
    onSubmit?: (e: React.FormEvent) => void;
    contactName: string;
    setContactName: (name: string) => void;
    contactMessage: string;
    setContactMessage: (message: string) => void;
}

const ListDepoimento = ({allDepoimentos, onSubmit, contactName, setContactName, contactMessage, setContactMessage}: listDepoimentosProps) => {
    return (
        <>
            <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, mt: 2 }}>
                {allDepoimentos.map((t: any) => (
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

            <Box component="form" onSubmit={onSubmit} sx={{ mt: 3, display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" } }}>
                <TextField label="Seu nome" value={contactName} onChange={(e) => setContactName(e.target.value)} fullWidth />
                <TextField label="Mensagem" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} fullWidth />
                <Button type="submit" variant="contained" color="secondary">Enviar depoimento</Button>
            </Box>
        </>
    )
};

export default ListDepoimento