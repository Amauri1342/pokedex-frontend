import React from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import ActiveLink from "../ActiveLink/ActiveLink";

const navItems = [
  { path: '/user', text:'Usuario'},
  { path: '/pricing', text:'Precios'},
  { path: '/contact', text:'Contáctanos'},
]

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar_container}>
        <div className={styles.sidebar} >
          <div>
            <Link href={'/home'}>Logo</Link>
          </div>
          <div className={styles.navitem_container}>
            {
              navItems.map( navItems => (
                <ActiveLink key={navItems.path} {...navItems}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
