import React from "react";
import App from './App';
import GithubProvider from "./Gitprovider";

const Provider = () =>{
return(
    <main>
        <GithubProvider>
            <App />
        </GithubProvider>
    </main>
);

};

export default Provider;