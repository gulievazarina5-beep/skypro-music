'use client';

import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import { TrackType, FilterCategory } from '../../types/track';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setCurrentTrack, setPlaylist } from '../../store/features/trackSlice';
import styles from './Centerblock.module.css';

interface CenterblockProps {
  tracks: TrackType[];
}

const YEAR_SORT_OPTIONS: string[] = [
  'По умолчанию',
  'Сначала новые',
  'Сначала старые',
];

const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
};

export default function Centerblock({ tracks }: CenterblockProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>(null);
  const dispatch = useAppDispatch();
  const { currentTrack, isPlaying } = useAppSelector((state) => state.track);

  const handleTrackClick = (track: TrackType) => {
    dispatch(setPlaylist(tracks));
    dispatch(setCurrentTrack(track));
  };

  const handleFilterClick = (nameFilter: FilterCategory) => {
    setActiveFilter((prev) => (prev === nameFilter ? null : nameFilter));
  };

  const uniqueAuthors = useMemo<string[]>(() => {
    const authors = tracks
      .map((track) => track.author)
      .filter((author) => Boolean(author) && author !== '-');
    return Array.from(new Set(authors));
  }, [tracks]);

  const uniqueGenres = useMemo<string[]>(() => {
    const genres = tracks.flatMap((track) => track.genre).filter(Boolean);
    return Array.from(new Set(genres));
  }, [tracks]);

  return (
    <div className={styles.centerblock}>
      <div className={styles.centerblock__search}>
        <svg className={styles.search__svg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.search__text}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>

      <h2 className={styles.centerblock__h2}>Треки</h2>

      <div className={styles.centerblock__filter}>
        <div className={styles.filter__title}>Искать по:</div>

        <div className={styles.filter__wrapper}>
          <div
            onClick={() => handleFilterClick('author')}
            className={classNames(styles.filter__button, {
              [styles.active]: activeFilter === 'author',
            })}
          >
            исполнителю
          </div>
          {activeFilter === 'author' && (
            <div className={styles.filter__dropdown}>
              <ul className={styles.filter__list}>
                {uniqueAuthors.map((author) => (
                  <li key={author} className={styles.filter__item}>
                    {author}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={styles.filter__wrapper}>
          <div
            onClick={() => handleFilterClick('year')}
            className={classNames(styles.filter__button, {
              [styles.active]: activeFilter === 'year',
            })}
          >
            году выпуска
          </div>
          {activeFilter === 'year' && (
            <div className={styles.filter__dropdown}>
              <ul className={styles.filter__list}>
                {YEAR_SORT_OPTIONS.map((option) => (
                  <li key={option} className={styles.filter__item}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={styles.filter__wrapper}>
          <div
            onClick={() => handleFilterClick('genre')}
            className={classNames(styles.filter__button, {
              [styles.active]: activeFilter === 'genre',
            })}
          >
            жанру
          </div>
          {activeFilter === 'genre' && (
            <div className={styles.filter__dropdown}>
              <ul className={styles.filter__list}>
                {uniqueGenres.map((genre) => (
                  <li key={genre} className={styles.filter__item}>
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className={styles.centerblock__content}>
        <div className={styles.content__title}>
          <div className={classNames(styles.playlistTitle__col, styles.col01)}>
            Трек
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col02)}>
            Исполнитель
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col03)}>
            Альбом
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col04)}>
            <svg className={styles.playlistTitle__svg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>

        <div className={styles.content__playlist}>
          {tracks.map((track) => {
            const isCurrent = currentTrack?._id === track._id;

            return (
              <div
                className={styles.playlist__item}
                key={track._id}
                onClick={() => handleTrackClick(track)}
              >
                <div className={styles.playlist__track}>
                  <div className={styles.track__title}>
                    <div className={styles.track__titleImage}>
                      {isCurrent ? (
                        <span
                          className={classNames(styles.playingDot, {
                            [styles.playingDotActive]: isPlaying,
                          })}
                        />
                      ) : (
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      )}
                    </div>
                    <div>
                      <a
                        className={styles.track__titleLink}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {track.name}
                      </a>
                    </div>
                  </div>

                  <div className={styles.track__author}>
                    <a
                      className={styles.track__authorLink}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      {track.author}
                    </a>
                  </div>

                  <div className={styles.track__album}>
                    <a
                      className={styles.track__albumLink}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      {track.album}
                    </a>
                  </div>

                  <div className={styles.track__time}>
                    <svg className={styles.track__timeSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className={styles.track__timeText}>
                      {formatDuration(track.duration_in_seconds)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
