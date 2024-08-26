import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
import { isApplyMusicBtn } from "store/reducer";
import { useSetRecoilState } from "recoil";
import { usePostApplyMusicMutation } from "queries/wakeupSong/wakeupSong.query";
import ErrorHandler from "utils/Error/ErrorHandler";

const useApplyWakeupSong = () => {
  const queryClient = useQueryClient();
  const postApplyMusicMutation = usePostApplyMusicMutation();
  const setIsApply = useSetRecoilState(isApplyMusicBtn);

  const postApplyWakeupSong = (wakeupSongUrl: string) => {
    if (wakeupSongUrl.trim() === "") {
      toast.info("url을 입력해주세요!");
      return;
    }

    postApplyMusicMutation.mutate(wakeupSongUrl, {
      onSuccess: (data) => {
        if (data.status === 226) {
          toast.error(`${data.message}`);
        } else {
          toast.success("기상송을 신청했습니다!");

          queryClient.invalidateQueries("pendingMusic/getPendingMusicList");
          queryClient.invalidateQueries(
            "myAllWakeupSong/useGetMyAllWakeupSong"
          );
        }

        setIsApply({ isApply: true });
      },
      onError: (error) => {
        const errorCode = error as AxiosError;
        toast.error(ErrorHandler.applyWakeupSongError(errorCode));
      },
    });
  };

  return { postApplyWakeupSong };
};

export default useApplyWakeupSong;
