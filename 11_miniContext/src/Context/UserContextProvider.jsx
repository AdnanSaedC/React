import React, { useDeferredValue } from "react";
import UserContext from "./userContext";


//the entire story from app.jsx continues here
//we are declaring user variable and useState to change that okay

//now we are calling userContext 

// go to user context and see the remaing story

//i guess you did now see what is happening

//we are using .Provider and values to reserve some keywords okay that this keyword is for the 
//variable which iam going to use here

//now go to app.jsx





function UserContextProvider({children}){
    //here children everything we wrap between <userContext></uC>
    // let it be <App/> or whatever it may be
    //we haven't imported useState thats why React.useState
    let [user,setUser]=React.useState(null)

    return(
        // user and setUser and the thing which we want to share
        // userContext.provider is coming from react.createContext
        <UserContext.Provider 
        value={{user,setUser}}>
        {children}
        {/* children are nothing but the incomimg value
        here we are receiving it passing it further thats it
        nothing sexy 

        now iam going give the access of the data which i want
        to share using the value(nothing its just prop) property

        here we are giving an object since you give everything
        inside the object
        */}
        </UserContext.Provider>
    )
}

export default UserContextProvider;