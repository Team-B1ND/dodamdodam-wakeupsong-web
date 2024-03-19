import { useDeleteMyWakeupSongMutation } from "queries/wakeupSong/wakeupSong.query";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { isApplyMusicBtn } from "store/reducer";

const useDeleteMyMusic = () => {
  const queryClient = useQueryClient();
  const deleteMyWakeupSong = useDeleteMyWakeupSongMutation();
  const setIsApply = useSetRecoilState(isApplyMusicBtn);

  const handleDeleteMyWakeupSong = (id: number) => {
    deleteMyWakeupSong.mutateAsync(id, {
      onSuccess: () => {
        setIsApply({ isApply: false });

        queryClient.invalidateQueries("myAllWakeupSong/useGetMyAllWakeupSong");
        toast.success("신청한 기상송을 삭제했습니다!");
      },
      onError: () => {
        toast.error("신청한 기상송을 삭제하지 못했습니다!");
      },
    });
  };
  return { handleDeleteMyWakeupSong };
};

export default useDeleteMyMusic;
