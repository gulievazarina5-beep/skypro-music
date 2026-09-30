import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Image
          src="/img/logo.png"
          width={250}
          height={170}
          className={styles.logoImage}
          alt="logo"
        />
      </div>
      <div className={styles.navBurger}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <div className={styles.navMenu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href="#" className={styles.menuLink}>
              Главное
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#" className={styles.menuLink}>
              Мой плейлист
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#" className={styles.menuLink}>
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
