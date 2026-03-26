import { Box, Typography, Chip, useTheme } from "@mui/material";
import { useWindowWidth } from "../Utils/utils.ts";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const experience = [
    {
        title: "Stagiaire — Geolives Belgium SRL",
        description:
            "Développement de pages et modules d'intégration web optimisés pour le SEO avec React pour le site SityTrail.",
        date: "2024 — 2025",
        type: "experience",
    },
    {
        title: "HEPL — Bachelier en informatique",
        description: "Orientation développement d'applications, obtenu avec distinction.",
        date: "2021 — 2025",
        type: "formation",
    },
    {
        title: "Athénée Royal Liège Atlas",
        description: "Obtention du CESS.",
        date: "2015 — 2021",
        type: "formation",
    },
];

const MyTimeline = () => {
    const width = useWindowWidth();
    const isMobile = width < 640;
    const theme = useTheme();

    return (
        <Box sx={{ px: isMobile ? 2 : 4, py: 8, maxWidth: 900, mx: "auto" }}>
            <Typography variant="h4" fontWeight={800} mb={6}>
                Parcours
            </Typography>

            <Timeline position={isMobile ? "right" : "alternate"}>
                {experience.map((exp, idx) => {
                    const color =
                        exp.type === "experience" ? theme.palette.primary.main : theme.palette.secondary.main;

                    return (
                        <TimelineItem key={idx}>
                            <TimelineSeparator>
                                <TimelineDot sx={{ bgcolor: color }} />
                                {idx !== experience.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography fontWeight={700}>{exp.date}</Typography>
                                <Typography variant="subtitle1" fontWeight={600} mt={0.5}>
                                    {exp.title}
                                </Typography>
                                <Typography color="text.secondary" mt={0.5}>
                                    {exp.description}
                                </Typography>
                                <Chip
                                    label={exp.type === "experience" ? "Expérience" : "Formation"}
                                    size="small"
                                    sx={{
                                        mt: 1,
                                        fontSize: 10,
                                        bgcolor: exp.type === "experience" ? "rgba(96,165,250,0.15)" : "rgba(167,139,250,0.15)",
                                        color: color,
                                    }}
                                />
                            </TimelineContent>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </Box>
    );
};

export default MyTimeline;