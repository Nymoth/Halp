import { LobbyComponent } from './scenes/lobby/lobby.component';

export const routes = [
  {
    path: '',
    component: LobbyComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
