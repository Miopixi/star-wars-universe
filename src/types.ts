export type TFilm = {
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
  name: string;
  url: string;
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

export type TListItem = {
  name: string;
  subItems: TSubItem[];
}

export type TSubItem = {
  label: string;
  value: string;
}

export type TResource = {
  next: string;
  results: TResourceResults;
}

export type TResourceResults = TPerson[];
