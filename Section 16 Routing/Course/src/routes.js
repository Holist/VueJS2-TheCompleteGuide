import Home from './components/Home.vue';
import Header from './components/Header.vue';

// import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

// Lazy Loading with Webpack : Il ne les enverra au client, via un build.js additionnel que si c'est nécessaire
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user');
    // 'user' est ici un nom de groupe, pour par exemple envoyer un build.js pour plusieurs composants d'un coup
};

export const routes = [
    // Use Props for routing :
    // { path: '/', component: Hello }, // No props, no nothing
    // { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
    // { path: '/static', component: Hello, props: { name: 'world' }}, // static values
    // { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
    // { path: '/attrs', component: Hello, props: { name: 'attrs' }}
    // { path: '', component: Home, name: "home"},
    
    // On peut préciser plusieurs composants dans une seule route de facon à les récupérer dans le fichier vue avec name
    // On pourra les afficher conditionnelment en fonction de la route ou on se trouve par exemple
    // Dans la Home le header est en haut puis le composant par défaut (Home)
    // Dans User le composant header-top n'existe pas, on verra le composant User puis le header-bottom
    // <router-view name="header-top"></router-view>
    // <router-view></router-view>
    // <router-view name="header-bottom"></router-view>

    { path: '', name: "home", components: {
        default: Home,
        'header-top': Header,
    }},
    { path: '/user',  components: {
        default: User,
        'header-bottom': Header,
    }, children: [
        { path: '', component: UserStart },
        // beforeEnter for security checks (local in routes) :
        { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();
        } },
        { path: ':id/edit', component: UserEdit, name: "userEdit" },
    ]},
    // { path: '/user/:id', component: User, props: true},
    // Redirections :
    { path: 'redirect-me', redirect: '/user'},
    { path: 'redirect-me-to-edit', redirect: { name: 'userEdit'}},
    { path: '*', redirect: '/'}
];