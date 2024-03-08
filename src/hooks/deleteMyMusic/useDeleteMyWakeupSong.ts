import { useDeleteMyWakeupSongMutation } from "queries/deleteMyWakeupSong/deleteMyWakeupSong.query";
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
        toast.success("내가 신청한 기상송 삭제 성공");
      },
      onError: () => {
        toast.error("삭제 실패. 다시 시도해 주십시오");
      },
    });
  };
  return { handleDeleteMyWakeupSong };
};

export default useDeleteMyMusic;
