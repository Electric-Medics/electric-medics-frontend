import React from "react";
import { AppBar, IconButton, Toolbar, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiAccountHardHat,
  mdiBriefcase,
  mdiHome,
  mdiHomeGroup,
  mdiInformation,
} from "@mdi/js";

const MenuBar = () => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    const name = e.target as HTMLElement;
    const link = name.innerText.toLowerCase();
    <Link to={`/${link}`} />;
  };

  return (
    <Container maxWidth={false}>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" name="home" onClick={onClick}>
            <Icon path={mdiHome} size={1} />
            Home
          </IconButton>
          <IconButton edge="start" name="about" onClick={onClick}>
            <Icon path={mdiInformation} size={1} />
            About
          </IconButton>
          <IconButton edge="start" name="services" onClick={onClick}>
            <Icon path={mdiAccountHardHat} size={1} />
            Services
          </IconButton>
          <IconButton edge="start" name="reviews" onClick={onClick}>
            <Icon path={mdiAccountHardHat} size={1} />
            Reviews
          </IconButton>
          <IconButton edge="start" name="showroom" onClick={onClick}>
            <Icon path={mdiHomeGroup} size={1} />
            Showroom
          </IconButton>
          <IconButton edge="start" name="careers" onClick={onClick}>
            <Icon path={mdiBriefcase} size={1} />
            Careers
          </IconButton>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default MenuBar;
