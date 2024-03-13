'use client';

import React from "react";
import Link from "next/link";
import PropTypes from 'prop-types';
import styles from "./ActiveLink.module.css";
import { usePathname } from 'next/navigation';

const ActiveLink = ({text, path}) => {
    ActiveLink.propTypes = {
        text: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    };

    const pathName = usePathname();

    return (
        <Link href={path} className={`${styles.link} ${(pathName === path) && styles['active-link']}`}>
            {text}
        </Link>
    );
};

export default ActiveLink;
