import React, { useState, useEffect, useRef } from "react";
import enterIcon from "../../assets/enter.svg";
import style from "./SearchUser.module.scss";
import PropTypes from "prop-types";
import { SearchResults } from "./SearchResults";

const GITHUB_API_ENDPOINT = "https://api.github.com/search/users";


export const SearchUser = ({ count = 5, size = "m", type = "primary" }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);


  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchValue.trim() !== "") {
        fetchUserData();
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (searchResults.length > 0) {
      const firstUser = searchResults[0];
      window.location.href = `/${firstUser.login}/`;
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${GITHUB_API_ENDPOINT}?q=${searchValue}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_SECRET_TOKEN}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const users = data.items.slice(0, count);
        setSearchResults(users);
      } else {
        console.error("Erreur lors de la récupération des utilisateurs GitHub");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs GitHub :", error);
    }
  };

  return (
    <div className={style.searchBar}>
      <form onSubmit={handleFormSubmit} className={style.form} >
        <input
          ref={inputRef}
          type="text"
          value={searchValue}
          placeholder="Recherche user GitHub"
          className={style.searchBar_input}
          style={{
            fontSize: size === "s" ? "14px" : "19px",
            backgroundColor: type === "secondary" ? "#f7fbfd" : "#D2E6F4",
          }}
          onChange={handleSearchChange}
        />
        <button type="submit" className={style.form_button}>
          <img src={enterIcon} alt=" icon d'entré" />
        </button>
      </form>
        
      {searchResults.length > 0 && (
        <SearchResults
          users={searchResults}
          key={searchResults.map((user) => user.id).join("-")}
          size={size}
        />
      )}
      
    </div>
  );
};

SearchUser.propTypes = {
  count: PropTypes.number,
  size: PropTypes.string,
  type: PropTypes.string,
};

