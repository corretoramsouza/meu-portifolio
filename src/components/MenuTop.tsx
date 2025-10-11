import { AppBar, Avatar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const MenuTop = () => {
    return (
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
            )
}

export default MenuTop;