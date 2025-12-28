import React from "react";
import { useState,createContext } from "react";

//hello again
//please read userContextProvider Comment first
//here we are just creating a context
//a global file okay or database

//go back userContextProvider




const UserContext=React.createContext();
//it is also a method(userContext)

export default UserContext;

/**
 * what we are doing here is we have created something like a global
 * file which has the access of all thing inside the provider
 * 
 * now comes what is provider a provider is nothing but a wrapper
 * which raps everything and it uses that to get access the all the variable
 * of the components used inside it
 * <userContext>
 *    <login>
 *        <Card></Card>
 *    </login>
 * </userContext>
 * 
 * now userContext has the access of all components data inside it
 * which includes login,card
 * 
 * Another way is also possible
 * 
 */