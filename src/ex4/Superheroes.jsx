/* eslint-disable */
import React from 'react';
import DisplayListHeroes from './DisplayListHeroes';

const SuperHeroes = ({ superheroes }) => {
  const dumbHeroes = superheroes.filter((element) => element.powerstats.intelligence < 30);
  return (
    <DisplayListHeroes dumbHeroes={dumbHeroes} />
  );
};

export default SuperHeroes;
/* eslint-disable */