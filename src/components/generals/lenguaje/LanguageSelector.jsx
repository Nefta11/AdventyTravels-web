import { useState, useEffect } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { useTranslation } from 'react-i18next';
import "./LanguageSelector.css";
import colors from "../../../utils/colors";

// Importa las imágenes de las banderas
import esFlag from '../../../assets/images/mx.webp';
import enFlag from '../../../assets/images/usa.webp';
import frFlag from '../../../assets/images/fra.webp';

const LanguageSelector = () => {
    const { i18n } = useTranslation(); 
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("selectedLanguage") || "es");

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
    }, [selectedLanguage, i18n]);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
        localStorage.setItem("selectedLanguage", lang);
        handleClose();
    };

    const getFlag = (lang) => {
        switch (lang) {
            case "es":
                return esFlag;
            case "en":
                return enFlag;
            case "fr":
                return frFlag;
            default:
                return esFlag;
        }
    };

    return (
        <div className="language-selector-container position-adjust">
            <Button
                variant="outlined"
                onClick={handleOpen}
                className="language-selector-button"
                style={{ borderColor: colors.color4 }}
            >
                <img src={getFlag(selectedLanguage)} alt={selectedLanguage} className="flag-icon" />
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="language-selector-menu"
            >
                <MenuItem onClick={() => handleLanguageChange("es")}>
                    <img src={esFlag} alt="ESP" className="flag-icon" /> ESP
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange("en")}>
                    <img src={enFlag} alt="ENG" className="flag-icon" /> ENG
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange("fr")}>
                    <img src={frFlag} alt="FRA" className="flag-icon" /> FRA
                </MenuItem>
            </Menu>
        </div>
    );
};

export default LanguageSelector;
