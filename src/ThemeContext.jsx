import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [binaryOn, setBinaryOn] = useState(true);

    const toggleBinary = () => {
        setBinaryOn((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ binaryOn, toggleBinary }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Optional hook to use in components
export function useTheme() {
    return useContext(ThemeContext);
}