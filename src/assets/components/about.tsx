import { Typography, Box, Button } from "@mui/material";

const About = () => {
    return (
        <Box sx={{ px: 4, py: 8, maxWidth: "700px", margin: "0 auto" }}>

            <Typography variant="h3" fontWeight={800} mb={2}>
                Kenan Agirman
            </Typography>

            <Typography variant="body1" lineHeight={1.8}  mb={4}>
                Développeur web spécialisé en JavaScript, je suis passionné par
                la création d'applications modernes, performantes et bien structurées.
                Curieux et rigoureux, j'aime transformer des idées en projets concrets
                et fonctionnels.
            </Typography>

            <Box sx={{ display: "flex", gap: 2,justifyContent:"space-between" }}>
                <Button variant="contained" href="https://www.linkedin.com/in/kenan-agirman-64000736b/">
                   Linkedin
                </Button>
                <Button variant="contained" href="src/assets/styles/CV_Agirman_Kenan_.pdf" download>
                    Télécharger le CV
                </Button>
            </Box>

        </Box>
    );
};

export default About;