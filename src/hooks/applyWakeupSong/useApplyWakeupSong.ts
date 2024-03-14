import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
import { isApplyMusicBtn } from "store/reducer";
import { useSetRecoilState } from "recoil";
import { usePostApplyMusicMutation } from "queries/wakeupSong/wakeupSong.query";

const useApplyWakeupSong = () => {
  const queryClient = useQueryClient();
  const postApplyMusicMutation = usePostApplyMusicMutation();
  const setIsApply = useSetRecoilState(isApplyMusicBtn);

  const postApplyWakeupSong = async (wakeupSongUrl: string) => {
    postApplyMusicMutation.mutateAsync(wakeupSongUrl, {
      onSuccess: (data) => {
        if (data.status === 226) {
          toast.error(`${data.message}`);
        } else {
          toast.success(`${data.message}`);
          queryClient.invalidateQueries("pendingMusic/getPendingMusicList");
          queryClient.invalidateQueries(
            "myAllWakeupSong/useGetMyAllWakeupSong"
          );
        }
        setIsApply({ isApply: true });
      },
      onError: () => {
        toast.error("기상송 신청 실패");
      },
    });
  };

  return { postApplyWakeupSong };
};

export default useApplyWakeupSong;
