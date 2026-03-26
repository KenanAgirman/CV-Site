import {useWindowWidth} from "../Utils/utils.ts";
import type {Coding, Databasse, Languages} from "../api/api-interface.ts";
import {Card, CardContent, Typography, Box, Grid} from "@mui/material";
import {SiJavascript, SiReact, SiC, SiSpringboot, SiPhp, SiCplusplus, SiTypescript, SiKotlin  ,SiR, SiFlutter,SiDotnet,SiMysql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GrOracle } from "react-icons/gr";

import { FaJava } from "react-icons/fa";

const languages: Languages[] = [
    {name: "Français"},
    {name: "Anglais"},
    {name: "Kurde"},
    {name: "Allemand"},
];

const codings: Coding[] = [
    { name: "JavaScript", icon: <SiJavascript size={30} color="#F7DF1E"/>, color: "#F7DF1E" },
    { name: "React", icon: <SiReact size={30} color="#61DAFB"/>, color: "#61DAFB" },
    { name: "C", icon: <SiC size={30} color="#A8B9CC"/>, color: "#A8B9CC" },
    { name: "C#", icon: <SiDotnet size={30} color="#512BD4"/>, color: "#512BD4" },
    { name: "Java", icon: <FaJava size={30} color="#f89820"/>, color: "#f89820" },
    { name: "SpringBoot", icon: <SiSpringboot size={30} color="#6DB33F"/>, color: "#6DB33F" },
    { name: "PHP", icon: <SiPhp size={30} color="#777BB4"/>, color: "#777BB4" },
    { name: "C++", icon: <SiCplusplus size={30} color="#00599C"/>, color: "#00599C" },
    { name: "TypeScript", icon: <SiTypescript size={30} color="#3178C6"/>, color: "#3178C6" },
    { name: "Kotlin", icon: <SiKotlin size={30} color="#b81ee7"/>, color: "#b81ee7" },
    { name: "R", icon: <SiR size={30} color="#276DC3"/>, color: "#276DC3" },
    { name: "Flutter", icon: <SiFlutter size={30} color="#30b8f6"/>, color: "#30b8f6" },
];

const databasses: Databasse[] = [
    {name: "Mysql",icon: <SiMysql size={30} color="#1b64ff"/>, color: "#1b64ff" },
    {name: "PL/SQL",icon: <GrOracle size={30} color="#f8034f"/>, color: "#f8034f" },
    {name: "Firebase",icon: <IoLogoFirebase size={30} color="#ee7a40"/>, color: "#ee7a40" },
];

interface SkillGroupProps {
    title: string;
    items: Coding[];
}

const SkillGroup = ({ title, items }: SkillGroupProps) => (
    <Box mb={4}>
        <Typography variant="h6" fontWeight={700} mb={2}>
            {title}
        </Typography>

        <Grid container spacing={1.5} sx={{justifyContent:"space-around"}}>
            {items.map((i) => (
                <Grid  key={i.name}>
                    <Card
                        variant="outlined"
                        sx={{
                            minWidth: 120,
                            textAlign: "center",
                            backgroundColor: i.color ? `${i.color}15` : "transparent",
                            borderColor: i.color ? `${i.color}66` : "rgba(255,255,255,0.15)",
                            transition: "transform 0.2s",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                backgroundColor: i.color ? `${i.color}25` : "rgba(255,255,255,0.05)",
                            }
                        }}
                    >
                        <CardContent sx={{ padding: "12px !important" }}>
                            {i.icon && <Box mb={0.5}>{i.icon}</Box>}
                            <Typography fontWeight={500} color="white" fontSize={13}>
                                {i.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>
);
const Skills = () => {
    const width = useWindowWidth();
    const isMobile = width < 640;

    return (
        <Box sx={{px: isMobile ? 2 : 4, py: 8, maxWidth: "900px", margin: "0 auto"}}>

            <Typography variant="h4" fontWeight={800} mb={6}>
                Compétences
            </Typography>

            <Box sx={{display: "flex", flexDirection: "column", gap: 5}}>
                <SkillGroup title="Programmation" items={codings}/>
                <SkillGroup title="Bases de données" items={databasses}/>
                <SkillGroup title="Langues" items={languages}/>
            </Box>

        </Box>
    );
};

export default Skills;