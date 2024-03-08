import { useMutation } from "react-query";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";

export const useDeleteMyWakeupSongMutation = () => {
  const mutation = useMutation((musicId: number) =>
    wakeupSongRepository.deleteMyWakeupSong(musicId)
  );
  return mutation;
};
