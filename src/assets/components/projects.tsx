import {Box, Grid, Card, CardContent, Typography, Button, CardActions} from "@mui/material";
import { useState, useEffect } from "react";
import type {Project} from "../api/api-interface.ts";
import {useWindowWidth} from "../Utils/utils.ts";


const data: Project[] = [
    {
        id: 1,
        title: "Application de gestion de budget",
        description: "Suivi des dépenses et revenus personnels.",
        photos: [
            "src/assets/styles/App1.png",
            "src/assets/styles/App2.png",
            "src/assets/styles/App3.png",
            "src/assets/styles/App4.png",
        ],
        link:"https://github.com/KenanAgirman/Budgetapp",
    },
    {
        id: 2,
        title: "Application achat de vêtements",
        description: "Boutique en ligne avec panier et filtres.",
        photos: [
            "src/assets/styles/Shop1.png",
            "src/assets/styles/Shop2.png",
            "src/assets/styles/Shop3.png",
            "src/assets/styles/Shop4.png",
        ],
        link:"https://github.com/KenanAgirman/ShopWeb",

    },
    {
        id: 3,
        title: "Jeu Zelda-like",
        description: "Jeu d'aventure en vue du dessus.",
        photos: [
            "src/assets/styles/Game1.png",
            "src/assets/styles/Game2.png",
            "src/assets/styles/Game3.png",
            "src/assets/styles/Game4.png",
        ],
        link:"https://github.com/KenanAgirman/GameJs",

    },
];

const Projects = () => {
    const [currentImages, setCurrentImages] = useState(data.map(() => 0));
    const width = useWindowWidth();
    const isMobile = width < 640;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImages((prev) =>
                prev.map((imgIndex, projIndex) => (imgIndex + 1) % data[projIndex].photos.length)
            );
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ px: isMobile ? 2 : 4, py: 8, maxWidth: "900px", margin: "0 auto" }}>
            <Typography variant="h3" fontWeight={800} mb={6}>
                Projets
            </Typography>

            <Grid container spacing={3} sx={{ justifyContent: "space-around" }}>
                {data.map((project, index) => (
                    <Grid  key={project.id}>
                        <Card
                            variant="outlined"
                            sx={{
                                textAlign: "center",
                                backgroundColor: "rgba(255,255,255,0.03)",
                                borderColor: "rgba(255,255,255,0.08)",
                                transition: "transform 0.2s",
                                "&:hover": { transform: "translateY(-4px)" },
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >

                            <Box sx={{ width: "100%", }}>

                                <CardActions sx={{ justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
                                    <Button
                                        href={project.link}
                                        size="small"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Share
                                    </Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 8,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        display: "flex",
                                        gap: 0.5,
                                    }}
                                >
                                    {project.photos.map((_, i) => (
                                        <Box
                                            key={i}
                                            onClick={() =>
                                                setCurrentImages((prev) => prev.map((v, idx) => (idx === index ? i : v)))
                                            }
                                            sx={{
                                                width: i === currentImages[index] ? 16 : 6,
                                                height: 6,
                                                borderRadius: 3,
                                                backgroundColor:
                                                    i === currentImages[index] ? "white" : "rgba(255,255,255,0.4)",
                                                cursor: "pointer",
                                                transition: "width 0.2s, background 0.2s",
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>

                            <CardContent sx={{ padding: "12px !important" }}>
                                <Typography fontWeight={700} color="white" fontSize={14} mb={0.5}>
                                    {project.title}
                                </Typography>
                                <Typography color="text.secondary" fontSize={12}>
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;