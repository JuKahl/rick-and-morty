import "./characters.css";
import { createCard } from "./characters";
import { createElement } from "../../utils/createElement";

export default {
  title: "Components/characters",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchenz",
    status: "Alive2",
    origin: { name: "Earth (C-137)" },
    species: "Human",
  });

export const Morty = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    status: "Alive",
    origin: { name: "Earth (C-137)" },
    species: "Human",
  });

export const SummerSmith = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    name: "Summer Smith",
    status: "Alive",
    origin: { name: "Earth (Replacement Dimension)" },
    species: "Human",
  });

  export const Multiple = () => {
    const characters = [
      {
        imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        name: "Rick Sanchenz",
        status: "Alive",
        species: "Human",
        origin: { name: "Earth (C-137)" },
      },
      {
        imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        name: "Morty Smith",
        status: "Dead",
        species: "Human",
        origin: { name: "Earth (C-137)" },
      },
    ];

    
    // todo: display multiple characters based on `characters`. 
    // you can use `createElement` here to create a container.
    // don't forget to return the container. 
    const container = createElement ("div", {
      className: "container",
      childs: characters.map((character) => createCard(character))
    })
return container;
  };
