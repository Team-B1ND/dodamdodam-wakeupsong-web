import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { ChangeEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { usePostApplyMusicMutation } from "queries/WakeupSong/wakeupSong.query";
import { usePostMelonChartApplyMutation } from "queries/MelonChart/melonChart.query";
import ErrorHandler from "utils/Error/ErrorHandler";

const useApplyWakeupSong = () => {
  const queryClient = useQueryClient();
  const [value, setValue] = useState<string>("");
  const postApplyMusicMutation = usePostApplyMusicMutation();
  const postMelonChartApplyMutation = usePostMelonChartApplyMutation();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleClickPostWakeupSong();
    }
  };

  const handleClickPostWakeupSong = () => {
    if (value.trim() === "") {
      toast.info("url을 입력해주세요");
      return;
    }

    // 기상송을 링크로 신청한 경우
    if (value.startsWith("http")) {
      postApplyMusicMutation.mutate(value, {
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
        },
        onError: (error) => {
          const axiosError = error as AxiosError;
          toast.error(ErrorHandler.applyWakeupSongError(axiosError));
        },
      });
    }

    // 기상송을 제목, 아티스트로 신청한 경우
    else {
      const [title, artist] = value.split(", ");

      postMelonChartApplyMutation.mutate(
        { artist, title },
        {
          onSuccess: () => {
            toast.success("기상송을 신청했습니다!");
            queryClient.invalidateQueries("pendingMusic/getPendingMusicList");
            queryClient.invalidateQueries(
              "myAllWakeupSong/useGetMyAllWakeupSong"
            );
          },
          onError: (error) => {
            const errorCode = error as AxiosError;
            toast.error(ErrorHandler.applyWakeupSongError(errorCode));
          },
        }
      );
    }

    setValue("");
  };

  return {
    value,
    handleChangeValue,
    handleKeyDown,
    handleClickPostWakeupSong,
  };
};

export default useApplyWakeupSong;
