import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";

interface PlaylistItem {
  id: number;
  src: string;
  alt: string;
  href: string;
}

const PLAYLISTS: PlaylistItem[] = [
  { id: 1, src: "/img/playlist01.png", alt: "day's playlist", href: "#" },
  { id: 2, src: "/img/playlist02.png", alt: "100 dance hits", href: "#" },
  { id: 3, src: "/img/playlist03.png", alt: "indie charge", href: "#" },
];

export default function Sidebar() {
  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
        <div className={styles.sidebar__icon}>
          <svg>
            <use xlinkHref="/img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>

      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          {PLAYLISTS.map((playlist) => (
            <div className={styles.sidebar__item} key={playlist.id}>
              <Link className={styles.sidebar__link} href={playlist.href}>
                <Image
                  className={styles.sidebar__img}
                  src={playlist.src}
                  alt={playlist.alt}
                  width={250}
                  height={150}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
