import React from "react";
import { Link } from "react-router-dom";
import style from './SearchUser.module.scss'

export const SearchResults = ({ users }) => {
  return (
    <div className={style.searchResult}>
      {users.map((user, key) => (
        <Link key={key} to={`/${user.login}/`} className={style.searchResult_card}>
          <div className={style.searchResult_card_profile}>
            <img className={style.searchResult_card_img} src={user.avatar_url} alt={"user.login"} />
          </div>
          <span  className={style.searchResult_card_name} >{user.login} </span>
        </Link>
         ))}
    </div>
  );
};
