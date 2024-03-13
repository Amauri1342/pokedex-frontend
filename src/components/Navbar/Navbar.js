import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar_container}>
        <div className={styles.navbar} >
          <div>
            <p>Aquí un buscador de rutas</p>
          </div>
          <div>
            <Link href={'/user'}>Usuario</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
