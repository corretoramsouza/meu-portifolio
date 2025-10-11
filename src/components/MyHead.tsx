import { Box, Button, Card, Container, Typography } from "@mui/material";


const MyHead = ({opacityTarget}: {opacityTarget: number}) => {
    return (
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
    )
}

export default MyHead;