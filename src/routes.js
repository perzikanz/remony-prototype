import Home from './pages/Home';
import Question from './pages/Question';
import Free from './pages/Free';
import NotFound from './pages/NotFound';

export const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/question', component: Question },
  { path: '/free', component: Free },
  { path: '', component: NotFound },
];
