import { RouteType } from '../types';
import Home from '../app/page/home';
import Games from 'app/page/games';

export const publicRoute: RouteType[] = [
  { component: Home, patch: '/' },
  { component: Games, patch: '/games', noneBanner: true },
];
