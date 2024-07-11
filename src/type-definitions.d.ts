export type Film = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  release_date: string;
}

export type ListItem = {
  name: string;
  subItems: SubItem[];
}

export type SubItem = {
  label: string;
  value: string;
}
