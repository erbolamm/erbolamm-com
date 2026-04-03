import { useState, useEffect, useCallback, useRef } from 'react';

export function useAudioManager() {
  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem('erbolamm-volume');
    return saved ? parseFloat(saved) : 0.5;
  });
  
  const [isMicMuted, setIsMicMuted] = useState(true);
  const [isSpeakerMuted, setIsSpeakerMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('erbolamm-volume', volume.toString());
    if (audioRef.current) {
      if (isSpeakerMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = volume;
        if (audioRef.current.src) {
          audioRef.current.play().catch(() => {});
        }
      }
    }
  }, [volume, isSpeakerMuted]);

  const toggleMic = useCallback(() => setIsMicMuted(prev => !prev), []);
  const toggleSpeaker = useCallback(() => setIsSpeakerMuted(prev => !prev), []);
  const changeVolume = useCallback((newVolume: number) => {
    setVolume(Math.max(0, Math.min(1, newVolume)));
  }, []);

  const setBGM = useCallback((trackUrl: string) => {
    if (!audioRef.current) return;
    if (audioRef.current.src.endsWith(trackUrl)) return;
    audioRef.current.src = trackUrl;
    if (!isSpeakerMuted) {
      audioRef.current.play().catch(() => {});
    }
  }, [isSpeakerMuted]);

  return {
    volume, isMicMuted, isSpeakerMuted,
    toggleMic, toggleSpeaker, changeVolume, setBGM
  };
}
