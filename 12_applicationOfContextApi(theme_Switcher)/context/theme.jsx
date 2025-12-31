import { createContext ,useContext } from "react";

//lets create the context with some initial values so that our app doesnot
//crash

// the goalis to create a context and use that

//it is cretaing the context with some initial values
export const themeContext=createContext({
    themeMode:"light",
    setLightTheme:()=>{},
    setDarkTheme:()=>{},
})

//this is to wrap everything up
// initially in 11_miniContext it was all about userContext.provider
export const ThemeProvider=themeContext.Provider;


//this is to get and set the variables
export default function useTheme(){
    return useContext(themeContext)
}