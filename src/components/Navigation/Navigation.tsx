import Link from "next/link";
import styles from './Navigation.module.scss';
import { BurgerContext } from "../Burger-nav/Burger-nav";
import { useContext } from "react";
import { useRouter } from 'next/router'

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Create character', path: '/create-character' },
    { id: 3, title: 'Character generator', path: '/character-generator' }
];

export const Navigation: React.FC = () => {
    const { burger } = useContext(BurgerContext);
    const { pathname } = useRouter()

    return (
        <ul className={styles.navigation}
            style={{ left: (!burger ? '0px' : '-250px') }}>
            {navigation.map(({ id, title, path }) => (
                <li key={id} className={styles.navigationElement}>
                    <Link className={pathname === path ? styles.active : styles.navigationText} href={path}>{title}</Link>
                    {id == navigation.length ? null : <hr className={styles.line} />}
                </li>
            ))}
        </ul>
    )
}
