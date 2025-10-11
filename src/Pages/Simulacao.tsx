import React, { useState } from "react";
import { Container, Box, Typography, TextField, Slider, Button, Paper } from "@mui/material";
import Sessao from "../components/Sessao";

function formatBRL(value: number) {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

export default function Simulacao() {
    const [propertyValue, setPropertyValue] = useState<string>("");
    const [financingAmount, setFinancingAmount] = useState<string>("");
    const [discountValue, setDiscountValue] = useState<string>("");
    const [proSolutoPercentage, setProSolutoPercentage] = useState<number>(15);
    const [initialAcquisitionValue, setInitialAcquisitionValue] = useState<string>("");
    const [initialInstallments, setInitialInstallments] = useState<string>("");
    const [proSolutoInstallments, setProSolutoInstallments] = useState<string>("");

    const [result, setResult] = useState<null | {
        proSoluto: number;
        atoTotal: number;
        sinalUnitario: number;
        parcelaProSoluto: number;
        zerouAto?: boolean;
    }>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const pv = Number(propertyValue) || 0;
        const fa = Number(financingAmount) || 0;
        const dv = Number(discountValue) || 0;
        const atoInit = Number(initialAcquisitionValue) || 0;
        const sinalCount = Number(initialInstallments) || 0;
        const proParcelCount = Number(proSolutoInstallments) || 0;

        // Pró soluto = percentual * valor do imóvel
        const proSoluto = pv * (proSolutoPercentage / 100);
        // Ato total = valor do imóvel - valor do financiamento - pro soluto - subsidio
        const atoTotal = pv - (fa + dv);

        const zerouAto = proSoluto >= atoTotal

        const ato = zerouAto ? atoTotal: atoTotal - proSoluto;
        // Sinais = (ato total - ato inicial) / quantidade de sinais
        const sinalUnitario = sinalCount > 0 ? (ato - atoInit) / sinalCount : 0;

        // Parcelas do pró soluto (até 60x)
        const parcelaProSoluto = proParcelCount > 0 ? proSoluto / Math.min(proParcelCount, 60) : 0;

        setResult({
            proSoluto,
            atoTotal: ato,
            sinalUnitario,
            parcelaProSoluto,
            zerouAto
        });
    };

    return (
        <Box sx={{ bgcolor: "#d8bed5ff", width: "100vw", minHeight: "100vh", alignItems: "center", justifyContent: "center", justifyItems: "center" }}>
            <Sessao id="simulacao" titulo="Simulação de Plano de Pagamento" subtitulo="Faça uma simulação rápida e fácil do seu plano de pagamento.">
                <Paper sx={{ p: 3, mt: 3 }}>
                    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" } }}>
                            <TextField
                                label="Valor do imóvel"
                                type="number"
                                value={propertyValue}
                                onChange={(e) => setPropertyValue(e.target.value)}
                                fullWidth
                                InputProps={{ inputMode: "numeric" }}
                                required
                            />
                            <TextField
                                label="Valor do financiamento"
                                type="number"
                                value={financingAmount}
                                onChange={(e) => setFinancingAmount(e.target.value)}
                                fullWidth
                                InputProps={{ inputMode: "numeric" }}
                                required
                            />
                        </Box>

                        <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" } }}>
                            <TextField
                                label="Valor do desconto (subsidio)"
                                type="number"
                                sx={{ maxWidth: 300 }}
                                value={discountValue}
                                onChange={(e) => setDiscountValue(e.target.value)}
                                fullWidth
                                InputProps={{ inputMode: "numeric" }}
                            />

                            <Box sx={{ flex: 1 }}>
                                <Typography variant="subtitle2" gutterBottom>
                                    Pró soluto: {proSolutoPercentage}%
                                </Typography>
                                <Slider
                                    value={proSolutoPercentage}
                                    onChange={(_, v) => setProSolutoPercentage(Array.isArray(v) ? v[0] : v)}
                                    min={15}
                                    max={25}
                                    step={1}
                                    valueLabelDisplay="auto"
                                    sx={{ maxWidth: 300 }}
                                />
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" } }}>
                            <TextField
                                label="Ato inicial (valor)"
                                type="number"
                                value={initialAcquisitionValue}
                                onChange={(e) => setInitialAcquisitionValue(e.target.value)}
                                fullWidth
                                InputProps={{ inputMode: "numeric" }}
                            />

                            <TextField
                                label="Quantidade de sinais (parcelas da entrada)"
                                type="number"
                                value={initialInstallments}
                                onChange={(e) => setInitialInstallments(e.target.value)}
                                fullWidth
                                InputProps={{ inputMode: "numeric" }}
                            />
                        </Box>

                        <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexDirection: { xs: "column", md: "row" } }}>
                            <TextField
                                label="Parcelas do Pró soluto (até 60)"
                                type="number"
                                value={proSolutoInstallments}
                                onChange={(e) => setProSolutoInstallments(e.target.value)}
                                fullWidth
                                InputProps={{ inputMode: "numeric" }}
                            />

                            <Box sx={{ display: "flex", gap: 1 }}>
                                <Button variant="outlined" color="inherit" onClick={() => setResult(null)}>
                                    Limpar
                                </Button>
                                <Button type="submit" variant="contained" color="secondary">
                                    Calcular
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
                {result && (
                    <Paper sx={{ p: 3, mt: 3 }}>
                        <Typography variant="h6">Resultados</Typography>
                        <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                            {result.zerouAto && (
                                <>
                                    <Typography>O cliente zerou o Ato !!</Typography>
                                    <Typography>
                                        Vai pagar entrada de apenas: {formatBRL(result.atoTotal)}
                                    </Typography>

                                </>)}

                            {!result.zerouAto && (
                                <>
                                    <Typography>
                                        Ato total: {formatBRL(result.atoTotal)}
                                    </Typography>

                                    <Typography>
                                        Ato inicial: {formatBRL(Number(initialAcquisitionValue))}
                                    </Typography>

                                    <Typography>
                                        Sinais: {initialInstallments} x {formatBRL(result.sinalUnitario)}
                                    </Typography>

                                    <Typography>
                                        Entrada: {formatBRL(result.proSoluto)} por {proSolutoInstallments} x {formatBRL(result.parcelaProSoluto)}
                                    </Typography>
                                </>)}
                        </Box>
                    </Paper>
                )}
            </Sessao>
        </Box>
    );
}