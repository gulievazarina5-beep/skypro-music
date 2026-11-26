import Track from "../Track/Track";
import styles from "./CenterBlock.module.css";

// Создаем массив с данными всех треков из макета
const tracksData = [
  { id: 1, title: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
  { id: 2, title: "Elektro", author: "Dynoro, Outwork, Mr. Gee", album: "Elektro", time: "2:22" },
  { id: 3, title: "I'm Not Alone", author: "Calvin Harris", album: "I'm Not Alone", time: "3:34" },
  { id: 4, title: "Nonstop", author: "Стольный Град", album: "Квартал", time: "4:12" },
  { id: 5, title: "Run Run", author: "Jurban", album: "Run Run", time: "2:54" },
  { id: 6, title: "Eyes on Fire", author: "Blue Foundation, Zeds Dead", album: "Eyes on Fire", time: "5:20" },
  { id: 7, title: "Mucho Mambo", author: "Shaft", album: "Mucho Mambo", time: "3:41" },
  { id: 8, title: "Knives Out", author: "Radiohead", album: "Amnesiac", time: "4:14" },
  { id: 9, title: "Welcome Reality", author: "Nero", album: "Welcome Reality", time: "5:02" },
  { id: 10, title: "In Too Deep", author: "Sum 41", album: "All Killer No Filler", time: "3:27" },
];

export default function CenterBlock() {
  return (
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
          {tracksData.map((track) => (
            <Track 
              key={track.id}
              title={track.title}
              author={track.author}
              album={track.album}
              time={track.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
