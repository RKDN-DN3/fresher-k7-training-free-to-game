import { RouteType } from '../types';
import Home from '../app/page/home';

export const publicRoute: RouteType[] = [{ component: Home, patch: '/' }];
