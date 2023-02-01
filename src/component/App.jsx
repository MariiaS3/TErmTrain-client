import axios from "axios";
import React from "react";
import Layout from "./layout/Layout";
import TermContainer from "./terminal/TermContainer";
import "./App.css";

const App = () =>{
    return ( 
        <Layout>
            <TermContainer />
        </Layout>
    );
 }

 export default App;
 