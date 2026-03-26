import {AppBar, Box, Toolbar, Button, Drawer, List, ListItemButton, Typography, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useState} from "react";
import type {Sections} from "../api/api-interface.ts";
import {useWindowWidth} from "../Utils/utils.ts";

const sections: Sections[] = [
    {id: "accueil", label: "Accueil"},
    {id: "competences", label: "Compétences"},
    {id: "parcours", label: "Parcours"},
    {id: "projets", label: "Projets"},
    {id: "contact", label: "Contact"},
];

const Navbar = () => {
    const [value, setValue] = useState<number>(0);
    const [menuopen, setMenuOpen] = useState<boolean>(false);
    const width = useWindowWidth();
    const isMobile = width < 640;

    const handleClick = (index: number, id: string): void => {
        setValue(index);
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
        setMenuOpen(false);
    };

    return (
        <>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar sx={{justifyContent: "flex-end"}}>

                    {isMobile ? (
                        <IconButton sx={{color: 'primary.main'}} onClick={() => setMenuOpen(true)}>
                            <MenuIcon/>
                        </IconButton>
                    ) : (
                        <Box sx={{display: "flex", gap: 1}}>
                            {sections.map((s, index) => (
                                <Button
                                    key={s.id}
                                    onClick={() => handleClick(index, s.id)}
                                    sx={{fontWeight: value === index ? 700 : 400, textTransform: "none"}}
                                >
                                    {s.label}
                                </Button>
                            ))}
                        </Box>
                    )}


                    <Drawer
                        open={menuopen}
                        onClose={() => setMenuOpen(false)}
                        anchor="right"
                        PaperProps={{
                            sx: {
                                backgroundColor: "#16171d",
                                color: "white",
                            }
                        }}
                    >
                        <List>
                            {sections.map((s, index) => (
                                <ListItemButton
                                    key={s.id}
                                    selected={value === index}
                                    onClick={() => handleClick(index, s.id)}
                                >
                                    <Typography
                                        sx={{
                                            color: value === index ? "primary.main" : "primary.main"

                                        }}
                                    >
                                        {s.label}</Typography>

                                </ListItemButton>
                            ))}
                        </List>
                    </Drawer>

                </Toolbar>
            </AppBar>

        </>
    );
};

export default Navbar;