import { useMutation } from "react-query";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";

export const usePostApplyMusic = () => {
  const usePostApplyMusicMutation = useMutation((musicUrl: string) =>
    wakeupSongRepository.postApplyWakeupSong(musicUrl)
  );

  return { usePostApplyMusicMutation };
};
