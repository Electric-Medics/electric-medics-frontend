import React, { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import {
  AppBar,
  Button,
  Container,
  makeStyles,
  styled,
  Toolbar,
} from '@material-ui/core';
import {
  mdiBriefcase,
  mdiHome,
  mdiHomeGroup,
  mdiInformation,
  mdiNewspaperVariantMultiple,
  mdiPhone,
} from '@mdi/js';

import './MenuBar.css';
import Header from '../Header/Header';
import DropDownMenu from '../DropDownMenu';

//Styled Components
const MenuButton = styled(Button)({
  color: '#1A8FE3',
  fontSize: '16px',
  fontFamily: 'Work Sans, sans-serif',
  fontWeight: 500,
  marginLeft: '40px',
});

const MenuIcon = styled(Icon)({
  padding: '5px',
});

//Custom makeStyles Hook
const useStyles = makeStyles({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F18805',
    top: '800px',
    left: '0',
    fontFamily: 'Work Sans, sans-serif',
  },
  toolbar: {
    backgroundColor: '#e5e7e9',
    width: '75%',
    left: '25px',
  },
  toolbarContainer: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-evenly',
    backgroundColor: '#e5e7e9',
  },
});

const MenuBar = () => {
  const classes = useStyles();
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  return (
    <Container disableGutters={true} maxWidth={false}>
      <Header />
      <AppBar position={'sticky' || 'relative'} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Container maxWidth='xl' className={classes.toolbarContainer}>
            <MenuButton
              href='/'
              style={{
                color: activeItem === '/' ? '#F18805' : '#1A8FE3',
              }}
            >
              <MenuIcon
                path={mdiHome}
                size={1}
                color={activeItem === '/' ? '#F18805' : '#1A8FE3'}
              />
              Home
            </MenuButton>
            <DropDownMenu activeItem={activeItem} />
            <MenuButton
              href='/reviews'
              style={{
                color: activeItem === '/reviews' ? '#F18805' : '#1A8FE3',
              }}
            >
              <MenuIcon
                path={mdiNewspaperVariantMultiple}
                size={1}
                color={activeItem === '/reviews' ? '#F18805' : '#1A8FE3'}
              />
              Reviews
            </MenuButton>
            <MenuButton
              href='/showroom'
              style={{
                color: activeItem === '/showroom' ? '#F18805' : '#1A8FE3',
              }}
            >
              <MenuIcon
                path={mdiHomeGroup}
                size={1}
                color={activeItem === '/showroom' ? '#F18805' : '#1A8FE3'}
              />
              Showroom
            </MenuButton>
            <MenuButton
              href='/about'
              style={{
                color: activeItem === '/about' ? '#F18805' : '#1A8FE3',
              }}
            >
              <MenuIcon
                path={mdiInformation}
                size={1}
                color={activeItem === '/about' ? '#F18805' : '#1A8FE3'}
              />
              About
            </MenuButton>
            <MenuButton
              href='/careers'
              style={{
                color: activeItem === '/careers' ? '#F18805' : '#1A8FE3',
              }}
            >
              <MenuIcon
                path={mdiBriefcase}
                size={1}
                color={activeItem === '/careers' ? '#F18805' : '#1A8FE3'}
              />
              Careers
            </MenuButton>
          </Container>
        </Toolbar>
        <MenuButton
          href='tel:(949)462-9200'
          disableRipple={true}
          disableTouchRipple={true}
          className={'contactPhoneNumber'}
          style={{
            marginBottom: '15px',
            left: '5%',
            width: '250px',
            color: '#FFF',
            fontSize: '20px',
            fontWeight: 500,
          }}
        >
          <MenuIcon path={mdiPhone} size={1} color='#FFF' />
          (949) 462-9200
        </MenuButton>
        <div
          style={{
            display: 'flex',
            position: 'relative',
            color: '#FFF',
            fontSize: '13px',
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 400,
            cursor: 'pointer',
            width: '12%',
            top: '40px',
            right: '120px',
          }}
        >
          Contact Us Today for Assistance
        </div>
      </AppBar>
    </Container>
  );
};

export default MenuBar;
