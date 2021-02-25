import React from 'react';
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
  mdiAccountHardHat,
  mdiBriefcase,
  mdiHome,
  mdiHomeGroup,
  mdiInformation,
  mdiNewspaperVariantMultiple,
  mdiPhone,
} from '@mdi/js';

import Header from './Header/Header';

//Styled Components
const MenuButton = styled(Button)({
  color: '#1A8FE3',
  fontSize: '16px',
  fontFamily: 'Work Sans, sans-serif',
  fontWeight: 400,
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
    justifyContent: 'center',
    alignContent: 'center',
    top: '800px',
    maxWidth: '75%',
    left: '0',
    marginLeft: '14%',
    fontFamily: 'Work Sans, sans-serif',
  },
  toolbar: {
    position: 'relative',
    backgroundColor: '#F18805',
  },
  toolbarContainer: {
    backgroundColor: '#F18805',
  },
});

const MenuBar = () => {
  const classes = useStyles();

  return (
    <Container disableGutters={true} maxWidth={false}>
      <Header />
      <AppBar position={'sticky' || 'relative'} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Container maxWidth='xl' className={classes.toolbarContainer}>
            <MenuButton href='/'>
              <MenuIcon path={mdiHome} size={1} color='#1A8FE3' />
              Home
            </MenuButton>
            <MenuButton href='/about'>
              <MenuIcon path={mdiInformation} size={1} color='#1A8FE3' />
              About
            </MenuButton>
            <MenuButton href='/services'>
              <MenuIcon path={mdiAccountHardHat} size={1} color='#1A8FE3' />
              Services
            </MenuButton>
            <MenuButton href='/reviews'>
              <MenuIcon
                path={mdiNewspaperVariantMultiple}
                size={1}
                color='#1A8FE3'
              />
              Reviews
            </MenuButton>
            <MenuButton href='/showroom'>
              <MenuIcon path={mdiHomeGroup} size={1} color='#1A8FE3' />
              Showroom
            </MenuButton>
            <MenuButton href='/careers'>
              <MenuIcon path={mdiBriefcase} size={1} color='#1A8FE3' />
              Careers
            </MenuButton>
            <MenuButton href='tel:(949)462-9200'>
              <MenuIcon path={mdiPhone} size={1} color='#1A8FE3' /> (949)
              462-9200
            </MenuButton>
          </Container>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default MenuBar;
