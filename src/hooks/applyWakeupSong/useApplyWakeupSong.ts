import { toast } from "react-toastify";
import { usePostApplyMusic } from "queries/applyMusic/postApplyMusic.query";
import { useQueryClient } from "react-query";
import { isApplyMusicBtn } from "store/reducer";
import { useRecoilState } from "recoil";

const useApplyWakeupSong = () => {
  const queryClient = useQueryClient();
  const postApplyMusicMutation = usePostApplyMusic();
  const [isApply, setIsApply] = useRecoilState(isApplyMusicBtn);

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
