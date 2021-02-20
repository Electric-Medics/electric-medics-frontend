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

import Logo from '../assets/images/transparentLogo.png';

//Styled Components
const MenuButton = styled(Button)({
  color: '#1A8FE3',
  fontSize: '22px',
  fontFamily: 'Arial, sans-serif',
  marginLeft: '40px',
});

const MenuIcon = styled(Icon)({
  padding: '5px',
});

//Custom makeStyles Hook
const useStyles = makeStyles({
  appBar: {
    flexDirection: 'row',
    backgroundColor: '#F18805',
  },
  toolbar: {
    position: 'relative',
    display: 'flex',
    backgroundColor: '#F18805',
  },
  toolbarContainer: {
    justifyContent: 'space-between',
    backgroundColor: '#F18805',
  },
});

const MenuBar = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='xl'>
      <AppBar position={'sticky' || 'relative'} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <MenuButton href='/'>
            <img
              src={Logo}
              alt='Electrics Medics Logo'
              style={{
                position: 'relative',
                height: '125px',
                width: '225px',
              }}
            />
          </MenuButton>
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
            <MenuButton href='tel:(949)200-8956'>
              <MenuIcon path={mdiPhone} size={1} color='#1A8FE3' /> 949-200-8956
            </MenuButton>
          </Container>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default MenuBar;
