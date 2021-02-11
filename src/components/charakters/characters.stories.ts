import "./characters.css";
import { createCard } from "./characters";
import { createElement } from "../../utils/createElement";
import { Character, getCharacter, getCharacters } from "../../utils/api";

export default {
  title: "Components/characters",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchenz",
    status: "Alive",
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
  const characters: Character[] = [
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
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};

// Character from API

type CharacterFromAPIProps = {
  loaded: {
    character: Character;
  };
};
export const CharacterFromAPI = (
  args,
  { loaded: { character } }: CharacterFromAPIProps
) => {
  return createCard(character);
};

CharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(111),
  }),
];

// Characters from API

type CharactersFromAPIProps = {
  loaded: {
    characters: Character[];
  };
};
export const CharactersFromAPIFilter = (
  args,
  { loaded: { characters } }: CharactersFromAPIProps
) => {
  const input = createElement("input", {
    onchange: async () => {
      const newCharcters = await getCharacters(input.value);
      const newCards = newCharcters.map((character) => createCard(character));
      characterContainer.innerHTML = "";
      characterContainer.append(...newCards);
    },
  });
  const characterContainer = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  const container = createElement("div", {
    className: "",
    childs: [input, characterContainer],
  });
  return container;
};

CharactersFromAPIFilter.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];

// Excersice

export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    innerText: "Load random character",
    onclick: async () => {
      const rdmChar = getRandom(0, 400);
      const char = await getCharacter(rdmChar);
      const charCard = createCard(char);
      if (container.childNodes.length > 1) {
        container.removeChild(container.lastChild);
      }
      container.append(charCard);

      // container.replaceChild(CharCard, container.lastChild);

      // Verify each step (alert, console.log)
      // 1) generate random character id
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
      // 2) getCharacter from API
      // 3) create card
      // 4) append card
      // 5) make sure to only display one character
      // 6) feel awesome 🐱‍👤
    },
  });

  const container = createElement("div", {
    className: "container",
    childs: [randomButton],
  });
  return container;
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
