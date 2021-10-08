// src/components/SearchList.js
// Component to list out the cards

import React from 'react';
import Card from '../Card/Card';
import style from './SearchList.module.css';

function SearchList({ filtereReto }) {
  const filtered = filtereReto.map(reto => <Card key={reto.id} reto={reto} />);
  return (
    <div lassName={style.container} >
      <div className={style.box} >
        {filtered}
      </div>
    </div>
  );
}

export default SearchList;