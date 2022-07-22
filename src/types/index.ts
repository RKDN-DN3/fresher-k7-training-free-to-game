export type LanguageState = {
  language: string;
};

export interface RouteType {
  component: () => JSX.Element;
  patch: string;
  noneBanner?: boolean;
}

export type Game = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};
