import { useMutation } from "react-query";
import { DeleteMusicId } from "repository/wakeupSong/wakeupSong.Param";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";

export const useDeleteMyWakeupSong = () => {
  const useDeleteMyWakeupSongMutation = useMutation(
    ({ musicId }: DeleteMusicId) =>
      wakeupSongRepository.deleteMyWakeupSong({ musicId })
  );
  return { useDeleteMyWakeupSongMutation };
};
