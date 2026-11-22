'use client';

import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setIsPlaying } from '../../store/features/trackSlice';
import styles from './Bar.module.css';

const formatTime = (time: number): string => {
  if (!time || Number.isNaN(time)) return '0:00';
  const mins = Math.floor(time / 60);
  const secs = String(Math.floor(time % 60)).padStart(2, '0');
  return `${mins}:${secs}`;
};

export default function Bar() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dispatch = useAppDispatch();
  const { currentTrack, isPlaying } = useAppSelector((state) => state.track);

  const [isLoop, setIsLoop] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);


  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    audio.currentTime = 0;
    setCurrentTime(0);

    audio.play().catch(() => {
      dispatch(setIsPlaying(false));
    });
  }, [currentTrack, dispatch]);


  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    if (isPlaying) {
      audio.play().catch(() => {
        dispatch(setIsPlaying(false));
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrack, dispatch]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLoop;
    }
  }, [isLoop]);

  if (!currentTrack) {
    return null;
  }

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      dispatch(setIsPlaying(false));
    } else {
      audio.play().catch(() => {});
      dispatch(setIsPlaying(true));
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  const handleNotImplemented = () => {
    alert('Еще не реализовано');
  };

  return (
    <div className={styles.bar}>
      <audio
        ref={audioRef}
        src={currentTrack.track_file}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => {
          if (!isLoop) {
            dispatch(setIsPlaying(false));
          }
        }}
      />

      <div className={styles.bar__content}>
        <div className={styles.bar__playerProgress}>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className={styles.progressInput}
          />
        </div>

        <div className={styles.bar__playerBlock}>
          <div className={styles.bar__player}>
            <div className={styles.player__controls}>
              <div
                className={styles.player__btnPrev}
                onClick={handleNotImplemented}
              >
                <svg className={styles.player__btnPrevSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>

              <div className={styles.player__btnPlay} onClick={togglePlay}>
                {isPlaying ? (
                  <svg
                    className={styles.player__btnPlaySvg}
                    viewBox="0 0 15 19"
                    fill="none"
                  >
                    <rect width="5" height="19" fill="#D9D9D9" />
                    <rect x="10" width="5" height="19" fill="#D9D9D9" />
                  </svg>
                ) : (
                  <svg className={styles.player__btnPlaySvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                  </svg>
                )}
              </div>

              <div
                className={styles.player__btnNext}
                onClick={handleNotImplemented}
              >
                <svg className={styles.player__btnNextSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>

              <div
                onClick={() => setIsLoop((prev) => !prev)}
                className={classNames(
                  styles.player__btnRepeat,
                  styles.btnIcon,
                  { [styles.btnRepeatActive]: isLoop },
                )}
              >
                <svg className={styles.player__btnRepeatSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                </svg>
              </div>

              <div
                onClick={handleNotImplemented}
                className={classNames(
                  styles.player__btnShuffle,
                  styles.btnIcon,
                )}
              >
                <svg className={styles.player__btnShuffleSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </div>

            <div className={styles.player__trackPlay}>
              <div className={styles.trackPlay__contain}>
                <div className={styles.trackPlay__image}>
                  <svg className={styles.trackPlay__svg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className={styles.trackPlay__author}>
                  <a
                    className={styles.trackPlay__authorLink}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    {currentTrack.name}
                  </a>
                </div>
                <div className={styles.trackPlay__album}>
                  <a
                    className={styles.trackPlay__albumLink}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    {currentTrack.author}
                  </a>
                </div>
              </div>

              <div className={styles.trackPlay__likeDis}>
                <div
                  className={classNames(styles.trackPlay__like, styles.btnIcon)}
                >
                  <svg className={styles.trackPlay__likeSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                  </svg>
                </div>
                <div
                  className={classNames(
                    styles.trackPlay__dislike,
                    styles.btnIcon,
                  )}
                >
                  <svg className={styles.trackPlay__dislikeSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bar__volumeBlock}>
            <div className={styles.timeDisplay}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            <div className={styles.volume__content}>
              <div className={styles.volume__image}>
                <svg className={styles.volume__svg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                </svg>
              </div>
              <div className={styles.volume__progress}>
                <input
                  className={styles.volume__progressLine}
                  type="range"
                  name="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
