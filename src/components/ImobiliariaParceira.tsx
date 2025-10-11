import { Box, Typography, Link } from "@mui/material";
import { imobiliariaParceira } from "../fonteDeDados";


const ImobiliariaParceira = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 5,
                bgcolor: "rgba(78,15,75,0.06)",
                borderRadius: 5,
                flexDirection: { xs: "column", md: "row" },
                textAlign: { xs: "center", md: "left" },
                ml: 5,
                mr: 5

            }}
        >
            <Box sx={{ flexShrink: 0, height: 100, width: 230, display: "flex", alignItems: "center", justifyContent: "center", p: 1, bgcolor: "transparent", borderRadius: 5, }}>
                <img src={imobiliariaParceira.logo} style={{ borderRadius: 40 }} alt={imobiliariaParceira.name} width='100%' height='auto' />
            </Box>

            <Box>
                <Typography variant="h4">{imobiliariaParceira.name}</Typography>
                <Typography variant="body1" color="text.secondary">
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
    )
}

export default ImobiliariaParceira;