import { useDeleteMyWakeupSong } from "queries/deleteMyWakeupSong/deleteMyWakeupSong.query";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { isApplyMusicBtn } from "store/reducer";

const useDeleteMyMusic = () => {
  const queryClient = useQueryClient();
  const { useDeleteMyWakeupSongMutation } = useDeleteMyWakeupSong();
  const [isApply, setIsApply] = useRecoilState(isApplyMusicBtn);

  const deleteMyWakeupSong = (id: number) => {
    useDeleteMyWakeupSongMutation.mutateAsync(
      {
        musicId: id,
      },
      {
        onSuccess: () => {
          setIsApply({ isApply: false });
          queryClient.invalidateQueries(
            "myAllWakeupSong/useGetMyAllWakeupSong"
          );
          toast.success("내가 신청한 기상송 삭제 성공");
        },
        onError: () => {
          toast.error("삭제 실패. 다시 시도해 주십시오");
        },
      }
    );
  };
  return { deleteMyWakeupSong };
};

export default useDeleteMyMusic;
