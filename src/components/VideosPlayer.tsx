import { Box, Typography } from "@mui/material";
import AutoPlayVideo from "./AutoPlayVideo";

interface VideosPlayerProps {
    enunciado: string;
    videoUrl: string;
    posterUrl: string;
}

export default function VideosPlayer({ enunciado, videoUrl, posterUrl }: VideosPlayerProps) {
    return (
        <Box textAlign="center" sx={{ width: '100%', mt: 4 }}>
            <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
                {enunciado}
            </Typography>
            <AutoPlayVideo src={videoUrl} poster={posterUrl} />
        </Box>
    )
}