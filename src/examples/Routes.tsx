import * as React from 'react';
import { Image } from 'react-native';
import Home from './routes/Home';
import Modal from './routes/Modal';
import Page2 from './routes/Page2';
import Page2b from './routes/Page2b';
import Page3 from './routes/Page3';
import TopNav from './components/TopNav';
import { always } from 'ramda';
import { createRoutes } from '../index';

const Routes = createRoutes({
    tabs: [
      {
        button: <Image source={{uri: 'https://s3.amazonaws.com/assets.aloompa.com/TestFolder/reservations-tab-icon-browse.svg'}} style={{width: 35, height: 30, marginLeft: 18, marginTop: 8}}></Image>,
        initial: 'Home'
      },
      {
        button: <Image source={{uri:'https://s3.amazonaws.com/assets.aloompa.com/TestFolder/reservations-tab-icon-tickets.svg'}} style={{width: 30, height: 25, marginTop: 8}}/>,
        initial: 'Page2'
      },
      {
        button: <Image source={{uri:'https://s3.amazonaws.com/assets.aloompa.com/TestFolder/reservations-tab-icon-account.svg'}} style={{position: 'relative', width: 30, height: 30, marginRight: 18, marginTop: 8}}/>,
        initial: 'Page3'
      }
    ],
    routes: {
        Home: {
            route: Home,
            getTitle: always('Home')
        },
        Page2: {
            route: Page2,
            getTitle: always('Page 2')
        },
        Page2b: {
            route: Page2b,
            getTitle: always('Page 2B')
        },
        Page3: {
            route: Page3,
            getTitle: always('Page 3 Home')
        },
        Modal: {
            route: Modal,
            getTitle: always('Modal'),
            mode: 'modal'
        }
    },
    renderTopNav: TopNav
});

export default Routes;