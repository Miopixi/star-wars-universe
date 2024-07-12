export type TFilm = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  release_date: string;
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
  results: TFilm[];
}
