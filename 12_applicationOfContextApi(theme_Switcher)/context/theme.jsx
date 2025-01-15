import { createContext ,useContext } from "react";

//lets create the context with some initial values so that our app doesnot
//crash

export const themeContext=createContext({
    themeMode:"light",
    setLightTheme:()=>{},
    setDarkTheme:()=>{},
})

export const ThemeProvider=themeContext.Provider;

export default function useTheme(){
    return useContext(themeContext)
}