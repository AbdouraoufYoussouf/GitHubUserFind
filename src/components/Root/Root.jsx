import React from "react";
import { Outlet, useMatch, useParams } from "react-router-dom";

export default function Root() {
    const match = useMatch("/:userId");
    const isUserIdPage = match != null;

    const containerStyle = {
        maxHeight: isUserIdPage? "100vh" : undefined,
    };

    const {userId} = useParams();
    

  return <div>
    <main>
        <header>
            je suis le profil d'utilisateur
        </header>
        <Outlet/>
    </main>
  </div>;
}
