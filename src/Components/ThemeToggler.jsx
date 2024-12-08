import React, { useState, useEffect } from "react";
import { AiFillSun } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function ThemeToggler() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "lemonade");

    const toggleTheme = () => {
        const newTheme = theme === "lemonade" ? "dark" : "lemonade";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="flex items-center gap-2">
            <button
                className="p-2 mx-2"
                onClick={toggleTheme}
            >
                {theme === "lemonade" ? <FaMoon className="text-sky-300 animate-bounce" size={25} /> : <AiFillSun fill="gold" size={25}/>}
            </button>
        </div>
    );
}

export default ThemeToggler;
