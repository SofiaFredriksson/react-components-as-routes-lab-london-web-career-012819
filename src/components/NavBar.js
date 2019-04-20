import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'pink',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        style={link}
        exact
        activeStyle={{
          background: 'pink'
        }}
      >
      Home
      </NavLink>

      <NavLink
        to="/movies"
        style={link}
        exact
        activeStyle={{
          background: 'pink'
        }}
      >
      Movies
      </NavLink>

      <NavLink
        to="/directors"
        style={link}
        exact
        activeStyle={{
          background: 'pink'
        }}
      >
      Directors
      </NavLink>

      <NavLink
        to="/actors"
        style={link}
        exact
        activeStyle={{
          background: 'pink'
        }}
      >
      Actors
      </NavLink>
    </div>
  );
};

export default NavBar;
