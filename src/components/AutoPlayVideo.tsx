import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

type Props = {
  src: string;
  poster?: string;
  height?: number | string;
  sx?: any;
};

export default function AutoPlayVideo({ src, poster, height = 360, sx }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [userInteracted, setUserInteracted] = useState(false);

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
    el.muted = true; // start muted to satisfy autoplay policies

    // garante que o vídeo seja visível mesmo se oz estilos do pai mudarem
    el.style.display = "block";
    el.style.width = "100%";
    el.style.maxWidth = "1000px";
    el.style.objectFit = "cover";
    el.style.borderRadius = "8px";
    // height em px quando numeric
    if (typeof height === "number") el.style.height = `${height}px`;
    else if (typeof height === "string") el.style.height = height;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (!ref.current) return;
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            try {
              await ref.current.play();
              // tenta ativar audio quando permitido
              if (userInteracted) {
                ref.current.muted = false;
              } else {
                ref.current.muted = true;
              }
            } catch {
              ref.current.muted = true;
              ref.current.play().catch(() => {});
            }
            // garante visibilidade quando em foco
            ref.current.style.opacity = "1";
            ref.current.style.visibility = "visible";
            ref.current.style.zIndex = "0";
          } else {
            // fora de foco: pause e mute
            try {
              ref.current.muted = true;
              ref.current.pause();
            } catch {}
            ref.current.style.opacity = "0.001"; // evita flash se sobreposto
            ref.current.style.visibility = "hidden";
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [userInteracted, height]);

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", my: 4, ...sx }}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        playsInline
        muted
        // controls intencionalmente omitidos
        style={{
          display: "block",
          width: "100%",
          maxWidth: 1000,
          objectFit: "cover",
          borderRadius: 8,
          // usa px quando for número
          height: typeof height === "number" ? `${height}px` : height,
        }}
      />
    </Box>
  );
}