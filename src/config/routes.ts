import IRoute from '../interfaces/route';
import CharacterPage from '../pages/character';
import LoginPage from '../pages/login';


const routes: IRoute[] = [
    {
        path: '/personagens',
        name: 'Personagens',
        component: CharacterPage,
        exact: true,
        private: true,
    },
    {
        path: '/',
        name: 'Login',
        component: LoginPage,
        exact: true,
        private: false,
    }
]


export default routes;