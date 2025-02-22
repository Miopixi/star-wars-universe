export type TStar = {
  x: number;
  y: number;
  radius: number;
  phase: number;
  brightness: number;
}

export type TFilm = {
  url: string;
  title: string;
  episode_id: number;
  opening_crawl: string;
  release_date: string;
}

export type TFilms = {
  next: string;
  results: TFilm[];
}

export type TCommon = {
  url: string;
  name: string;
  films: string[];
}

export type TPerson = TCommon & {
  eye_color: string;
  hair_color: string;
  birth_year: string;
}

export type TPeople = {
  next: string;
  results: TPerson[];
}

export type TSingleSpecies = TCommon & {
  eye_colors: string;
  hair_colors: string;
  language: string;
}

export type TSpecies = {
  next: string;
  results: TSingleSpecies[];
}

export type TStarship = TCommon & {
  crew: string;
  passengers: string;
  hyperdrive_rating: string;
  model: string;
}

export type TStarships = {
  next: string;
  results: TStarship[];
}

export type TVehicle = TCommon & {
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  model: string;
}

export type TVehicles = {
  next: string;
  results: TVehicle[];
}

export type TPlanet = TCommon & {
  climate: string;
  terrain: string;
  population: string;
}

export type TPlanets = {
  next: string;
  results: TPlanet[];
}

export type TListItem = {
  url: string;
  name: string;
  subItems: TSubItem[];
}

export type TSubItem = {
  label: string;
  value: string;
}

export type TResource = {
  next: string;
  results: TResourceResult[];
}

export type TResourceResult = TPerson | TSingleSpecies | TStarship | TVehicle | TPlanet
