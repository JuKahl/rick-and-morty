export type APICharacter = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type APICharacters = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: APICharacter[];
};

export type Character = {
  imgSrc: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  origin: {
    name: string;
  };
};

function convertToCharater(apiCharacter: APICharacter): Character {
  return {
    imgSrc: apiCharacter.image,
    name: apiCharacter.name,
    status: apiCharacter.status,
    origin: { name: apiCharacter.origin.name },
    species: apiCharacter.species,
  };
}

export async function getCharacter(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const result = (await response.json()) as APICharacter;
  const character = convertToCharater(result);

  return character;
}

export async function getCharacters(name?: string) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${name ? `?name=${name}` : ""}`
  );

  const result = (await response.json()) as APICharacters;
  const characters = result.results.map((apiCharacter) =>
    convertToCharater(apiCharacter)
  );
  return characters;
}
