import { RouteType } from 'types';
import Home from 'page/home';
import Games from 'page/games';

export const publicRoute: RouteType[] = [
  { component: Home, patch: '/' },
  { component: Games, patch: '/games', noneBanner: true },
];
