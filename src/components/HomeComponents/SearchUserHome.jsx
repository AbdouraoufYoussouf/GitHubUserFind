import React from "react";
import { Logo } from "../Logo/Logo";
import style from "./homeComponent.module.scss";
import { SearchUser } from "../SearchUser/SearchUSer";

export const SearchUserHome = () => {
  return (
    <div className={style.containerSearch}>
      <div className={style.containerSearchup}>
        <Logo />
        <SearchUser />
      </div>
    </div>
  );
};
