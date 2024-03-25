import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/" aria-label="Página inicial">
        <FaHome size={24} />
      </Link>
      <Link to="/register" aria-label="Entrar">
        <FaSignInAlt size={24} />
      </Link>
      <Link to="/login" aria-label="Perfil">
        <FaUserAlt size={24} />
      </Link>
    </Nav>
  );
}
