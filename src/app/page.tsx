import Image from "next/image";
import Link from "next/link";
import NavMenu from "../components/NavMenu/NavMenu";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          
          <NavMenu />

          <div className={styles.mainCenterblock}>
            <div className={styles.centerblockSearch}>
              <svg className={styles.searchSvg}>
                <use href="/img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                className={styles.searchText}
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 className={styles.centerblockH2}>Треки</h2>
            <div className={styles.centerblockFilter}>
              <div className={styles.filterTitle}>искать по:</div>
              <div className={styles.filterButton}>исполнителю</div>
              <div className={styles.filterButton}>году выпуска</div>
              <div className={styles.filterButton}>жанру</div>
            </div>
            <div className={styles.centerblockContent}>
              <div className={styles.contentPlaylistTitle}>
                <div className={styles.playlistTitleCol01}>Трек</div>
                <div className={styles.playlistTitleCol02}>ИСПОЛНИТЕЛЬ</div>
                <div className={styles.playlistTitleCol03}>АЛЬБОМ</div>
                <div className={styles.playlistTitleCol04}>
                  <svg className={styles.playlistTitleSvg}>
                    <use href="/img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              <div className={styles.contentPlaylist}>
                <div className={styles.playlistItem}>
                  <div className={styles.playlistTrack}>
                    <div className={styles.trackTitle}>
                      <div className={styles.trackTitleImage}>
                        <svg className={styles.trackTitleSvg}>
                          <use href="/img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.trackTitleText}>
                        <Link className={styles.trackTitleLink} href="#">
                          Guilt <span className={styles.trackTitleSpan}></span>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.trackAuthor}>
                      <Link className={styles.trackAuthorLink} href="#">
                        Nero
                      </Link>
                    </div>
                    <div className={styles.trackAlbum}>
                      <Link className={styles.trackAlbumLink} href="#">
                        Welcome Reality
                      </Link>
                    </div>
                    <div className={styles.trackTime}>
                      <svg className={styles.trackTimeSvg}>
                        <use href="/img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.trackTimeText}>4:44</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mainSidebar}>
            <div className={styles.sidebarPersonal}>
              <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
              <div className={styles.sidebarIcon}>
                <svg>
                  <use href="/img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div className={styles.sidebarBlock}>
              <div className={styles.sidebarList}>
                <div className={styles.sidebarItem}>
                  <Link className={styles.sidebarLink} href="#">
                    <Image
                      className={styles.sidebarImg}
                      src="/img/playlist01.png"
                      alt="day's playlist"
                      width={250}
                      height={150}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </main>

        <div className={styles.bar}>
          <div className={styles.barContent}>
            <div className={styles.barPlayerProgress}></div>
            <div className={styles.barPlayerBlock}>
              <div className={styles.barPlayer}>
                <div className={styles.playerControls}>
                  <div className={styles.playerBtnPrev}>
                    <svg className={styles.playerBtnPrevSvg}>
                      <use href="/img/icon/sprite.svg#icon-prev"></use>
                    </svg>
                  </div>
                  <div className={styles.playerBtnPlay}>
                    <svg className={styles.playerBtnPlaySvg}>
                      <use href="/img/icon/sprite.svg#icon-play"></use>
                    </svg>
                  </div>
                  <div className={styles.playerBtnNext}>
                    <svg className={styles.playerBtnNextSvg}>
                      <use href="/img/icon/sprite.svg#icon-next"></use>
                    </svg>
                  </div>
                  <div className={styles.playerBtnRepeat}>
                    <svg className={styles.playerBtnRepeatSvg}>
                      <use href="/img/icon/sprite.svg#icon-repeat"></use>
                    </svg>
                  </div>
                  <div className={styles.playerBtnShuffle}>
                    <svg className={styles.playerBtnShuffleSvg}>
                      <use href="/img/icon/sprite.svg#icon-shuffle"></use>
                    </svg>
                  </div>
                </div>

                <div className={styles.playerTrackPlay}>
                  <div className={styles.trackPlayContain}>
                    <div className={styles.trackPlayImage}>
                      <svg className={styles.trackPlaySvg}>
                        <use href="/img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div className={styles.trackPlayAuthor}>
                      <Link className={styles.trackPlayAuthorLink} href="#">
                        Ты ушел
                      </Link>
                    </div>
                    <div className={styles.trackPlayAlbum}>
                      <Link className={styles.trackPlayAlbumLink} href="#">
                        TRACK
                      </Link>
                    </div>
                  </div>

                  <div className={styles.trackPlayLikeDis}>
                    <div className={styles.trackPlayLike}>
                      <svg className={styles.trackPlayLikeSvg}>
                        <use href="/img/icon/sprite.svg#icon-like"></use>
                      </svg>
                    </div>
                    <div className={styles.trackPlayDislike}>
                      <svg className={styles.trackPlayDislikeSvg}>
                        <use href="/img/icon/sprite.svg#icon-dislike"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.barVolumeBlock}>
                <div className={styles.volumeContent}>
                  <div className={styles.volumeImage}>
                    <svg className={styles.volumeSvg}>
                      <use href="/img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                  </div>
                  <div className={styles.volumeProgress}>
                    <input
                      className={styles.volumeProgressLine}
                      type="range"
                      name="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
