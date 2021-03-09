import React from "react";

function Header({ user }) {
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-item">
          <h2>{user.name}' Flatnote</h2>
        </li>
      </ul>
    </div>
  );
}

export default Header;
