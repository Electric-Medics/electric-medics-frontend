import React, { useState } from "react";
import {
  Button,
  ClickAwayListener,
  Grow,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiAccountHardHat } from "@mdi/js";

type DropDownMenuProps = {
  activeItem: string;
};

const useStyles = makeStyles({
  serviceIcon: {
    padding: "5px",
  },
});

const DropDownMenu = ({ activeItem }: DropDownMenuProps) => {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const classes = useStyles();

  const handleToggle = () => {
    setOpen(true);
  };
  const mouseLeave = () => {
    setOpen(false);
  };
  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <>
      <Button
        href="/services"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onMouseEnter={handleToggle}
        onMouseLeave={mouseLeave}
        style={{
          color: activeItem === "/services" ? "#F18805" : "#1A8FE3",
          fontSize: "16px",
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 500,
          marginLeft: "40px",
        }}
      >
        <Icon
          className={classes.serviceIcon}
          path={mdiAccountHardHat}
          size={1}
          color={activeItem === "/services" ? "#F18805" : "#1A8FE3"}
        />
        Services
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              color: "#1A8FE3",
              backgroundColor: "#e5e7e9",
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper onMouseEnter={handleToggle} onMouseLeave={mouseLeave}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Service 1</MenuItem>
                  <MenuItem onClick={handleClose}>Service 2</MenuItem>
                  <MenuItem onClick={handleClose}>Service 3</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default DropDownMenu;
