import React, { useState, useEffect } from 'react';
import { Typewriter } from "react-simple-typewriter";
import style from './homeComponent.module.scss'

export const DescriptionHome = () => {
  const [index,setIndex] = useState(0)

  const data = [
    {
      title: "Recherche d'utilisateurs GitHub",
      description: "Notre application vous permet de rechercher facilement des utilisateurs GitHub en saisissant leur nom d'utilisateur dans la barre de recherche.",
    },
    {
      title: "Affichage des informations du compte",
      description: "Une fois que vous avez trouvé un utilisateur GitHub, notre application affiche les détails de son compte, y compris son nom, sa photo de profil, sa bio et d'autres informations pertinentes.",
    },
    {
      title: "Liste des repositories publics",
      description: "Vous pouvez également voir la liste des dépôts publics de l'utilisateur, avec des liens vers chacun d'entre eux pour une exploration facile du code source.",
    },
  ];


  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (index + 1) % data.length; // Calcul du nouvel indice
      setIndex(newIndex); // Mise à jour de l'indice
    }, 11000);

    return () => clearInterval(intervalId);
  }, [index]);

  const key = `${index}-${data.length}`;

  return (
    <div className={style.containerDesc}>
    
      <h1 key={index} className={style.containerDesc_title}>
        <Typewriter
          words={[data[index].title]}
          cursor
          cursorStyle="⚪"
          typeSpeed={20}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p key={key} className={style.containerDesc_desciption}>
        <Typewriter
           words={[data[index].description]}
          cursor
          cursorStyle="⚪"
          typeSpeed={50}
          deleteSpeed={25}
          delaySpeed={1000}
        />
      </p>
    </div>
  );
};


