import { useEffect, useState } from "react";

// Optionnel : si tu veux ajouter des propriétés custom à window
declare global {
    interface Window {
        __integrated?: boolean;
    }
}

export function useWindowWidth(): number {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        // Vérifie que window existe (sécurité pour le build)
        if (typeof window === "undefined") return;

        const handler = () => {
            setWidth(window.innerWidth);
        };
        if (typeof window !== "undefined") {
            window.addEventListener("resize", handler);
        }

        if (typeof document !== "undefined") {
            document.getElementById("root")?.scrollIntoView();
        }

        const interval = typeof window !== "undefined" ? setInterval(() => { /* ... */ }, 1000) : undefined;
        return () => interval && clearInterval(interval);
        // Initialise la largeur au montage
        handler();

        window.addEventListener("resize", handler);

        return () => {
            window.removeEventListener("resize", handler);
        };
    }, []);

    return width;
}