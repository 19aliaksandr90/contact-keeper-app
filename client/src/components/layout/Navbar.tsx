import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title?: string;
  icon?: string;
};

const Navbar: React.FC<Props> = ({ title = 'Contact Keeper', icon = 'fas fa-id-card-alt' }) => (
  <div className="navbar bg-primary">
    <div>
      <i className={icon} />
      {title}
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
