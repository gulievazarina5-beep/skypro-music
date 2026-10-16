import Link from "next/link";
import styles from "./Bar.module.css";

export default function Bar() {
  return (
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
  );
}
