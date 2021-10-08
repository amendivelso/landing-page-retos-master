// src/components/Search/Search.js
// Main search component

import React, { useState } from "react";
import Scroll from "../Scroll/Scroll";
import SearchList from "../SearchList/SearchList";
import style from "./Search.module.css";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filtereReto = details.filter((reto) => {
    return reto.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filtereReto={filtereReto} />
      </Scroll>
    );
  }

  return (
    <section className="">
      <div className={style.container}>
      {/*   <h2 className=" ">Busca un reto</h2> */}
        <input
          className={style.search}
          type="search"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
