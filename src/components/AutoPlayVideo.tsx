import { useEffect, useRef, useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

type Props = {
  src: string;
  poster?: string;
  height?: number | string;
  sx?: any;
};

export default function AutoPlayVideo({ src, poster, height = "auto", sx }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [inView, setInView] = useState(false);
  const [mutedState, setMutedState] = useState(true);
  const storageKey = "meu_portfolio_video_sound";

  useEffect(() => {
    const onUserInteract = () => setUserInteracted(true);
    window.addEventListener("click", onUserInteract, { once: true, passive: true });
    window.addEventListener("keydown", onUserInteract, { once: true, passive: true });
    return () => {
      window.removeEventListener("click", onUserInteract);
      window.removeEventListener("keydown", onUserInteract);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.loop = true;
    el.muted = true; // start muted to satisfy autoplay
    // estilos de segurança para garantir visibilidade
    el.style.display = "block";
    el.style.width = "100%";
    el.style.objectFit = "cover";
    el.style.borderRadius = "8px";
    // respeita height conforme props ou mantém 'auto'
    if (typeof height === "number") el.style.height = `${height}px`;
    else el.style.height = height;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (!ref.current) return;
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setInView(true);
            try {
              await ref.current.play();
            } catch {}
            const accepted = localStorage.getItem(storageKey) === "1";
            // tenta desmutar se já houve interação ou aceitação anterior
            if ((userInteracted || accepted) && ref.current) {
              try {
                ref.current.muted = false;
                setMutedState(false);
              } catch {
                ref.current.muted = true;
                setMutedState(true);
              }
            } else {
              ref.current.muted = true;
              setMutedState(true);
            }
            ref.current.style.visibility = "visible";
            ref.current.style.opacity = "1";
            ref.current.style.zIndex = "0";
          } else {
            setInView(false);
            try {
              ref.current.muted = true;
              ref.current.pause();
            } catch {}
            ref.current.style.visibility = "hidden";
            ref.current.style.opacity = "0.001";
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [userInteracted, height]);

  const enableSound = async () => {
    const el = ref.current;
    if (!el) return;
    try {
      el.muted = false;
      await el.play(); // user gesture should allow audio
      setMutedState(false);
      localStorage.setItem(storageKey, "1");
    } catch {
      el.muted = true;
      setMutedState(true);
    }
  };

  const disableSound = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    setMutedState(true);
    localStorage.removeItem(storageKey);
  };

  return (
    <Box sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", my: 4, position: "relative", ...sx }}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        playsInline
        muted
        style={{
          display: "block",
          objectFit: "cover",
          width: "100%",
          maxWidth: 1000,
          borderRadius: 8,
          height: typeof height === "number" ? `${height}px` : height,
        }}
        aria-label="Vídeo de destaque"
      />
      {inView && (
        <Box sx={{ position: "absolute", left: 16, bottom: 16 }}>
          {mutedState ? (
            <Tooltip title="Ativar som">
              <IconButton color="primary" onClick={enableSound} size="large">
                <VolumeUpIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Desativar som">
              <IconButton color="primary" onClick={disableSound} size="large">
                <VolumeOffIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      )}
    </Box>
  );
}