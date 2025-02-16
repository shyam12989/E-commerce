import React from "react";
import FooterBottom from "./Footer";
import Heading from "./Header";
import SignInOrSignUp from "./SignIn";
import ProductCart from "./Cart";
import { Outlet } from "react-router-dom";
import "./Project.css";
import ProductLists from "./ProductList";

function ProjectLayout(){
    
    return(
        <>
        <div className="App">
        <header className="App-header"> 
            <Heading/>
            <ProductLists/>
            <SignInOrSignUp/>
            <ProductCart/>            
        </header>
        <section className="App-main">
            <Outlet />
        </section>            
        <footer className="App-footer">
            <FooterBottom/>
        </footer>  
        </div>
            
        </>
    );
} export default ProjectLayout;