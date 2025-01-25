import { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import "./LanguageSelector.css";

const LanguageSelector = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState("MXN");

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
        handleClose();
    };

    const flags = {
        MXN: "🇲🇽",
        USD: "🇺🇸",
        FRA: "🇫🇷",
    };

    return (
        <div className="language-selector-container">
            <Button
                variant="outlined"
                onClick={handleOpen}
                endIcon={<ExpandMore />}
                className="language-selector-button"
            >
                {flags[selectedLanguage]} {selectedLanguage}
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="language-selector-menu"
            >
                <MenuItem onClick={() => handleLanguageChange("MXN")}>{flags["MXN"]} Español</MenuItem>
                <MenuItem onClick={() => handleLanguageChange("USD")}>{flags["USD"]} English</MenuItem>
                <MenuItem onClick={() => handleLanguageChange("FRA")}>{flags["FRA"]} Français</MenuItem>
            </Menu>
        </div>
    );
};

export default LanguageSelector;
