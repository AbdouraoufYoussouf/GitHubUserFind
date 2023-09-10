import React from "react";
import { Helmet } from "react-helmet-async";
import { Metadescriptions } from "../../constants/MetaDescriptions";
import style from "./Home.module.scss";
import { DescriptionHome } from "../../components/HomeComponents/DescriptionHome";
import { SearchUserHome } from "../../components/HomeComponents/SearchUserHome";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{Metadescriptions.home.title}</title>
        <meta name="description" content={Metadescriptions.home.title} />
      </Helmet>
      <div className={style.home } >
        <SearchUserHome/>
        <DescriptionHome/>
      </div>
    </>
  );
}
