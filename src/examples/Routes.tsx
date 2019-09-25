import * as React from 'react';
// import { Image } from 'react-native';
import Home from './routes/Home';
import Modal from './routes/Modal';
import Page2 from './routes/Page2';
import Page2b from './routes/Page2b';
import Page3 from './routes/Page3';
import TopNav from './components/TopNav';
import { always } from 'ramda';
import { createRoutes } from '../index';
import SvgIcon from '../components/SVGImage';

const Routes = createRoutes({
    tabs: [
      {
        button: <SvgIcon
          color={"#550000"}
          height={18}
          width={20}
          url={'https://s3.amazonaws.com/assets.aloompa.com/TestFolder/reservations-tab-icon-browse.svg'} 
        />,
        initial: 'Home'
      },
      {
        button: <SvgIcon
          color={"#005500"}
          height={18}
          width={20}
          url={'https://s3.amazonaws.com/assets.aloompa.com/TestFolder/reservations-tab-icon-tickets.svg'} 
        />,
        initial: 'Page2'
      },
      {
        button: <SvgIcon
          color={"#000055"}
          height={18}
          width={20}
          url={'https://s3.amazonaws.com/assets.aloompa.com/TestFolder/reservations-tab-icon-account.svg'} 
          />,
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