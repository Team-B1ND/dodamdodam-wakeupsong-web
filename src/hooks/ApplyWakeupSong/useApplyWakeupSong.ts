import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useQueryClient } from "react-query";
import { usePostApplyMusicMutation } from "queries/WakeupSong/wakeupSong.query";
import { usePostMelonChartApplyMutation } from "queries/MelonChart/melonChart.query";
import ErrorHandler from "utils/Error/ErrorHandler";
import { QUERY_KEYS } from "queries/queryKey";

const useApplyWakeupSong = () => {
  const queryClient = useQueryClient();
  const [value, setValue] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const postApplyMusicMutation = usePostApplyMusicMutation();
  const postMelonChartApplyMutation = usePostMelonChartApplyMutation();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (isError) {
      setIsError(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClickPostWakeupSong();
    }
  };

  const handleRemoveClick = () => {
    setValue("");
  };

  const handleClickPostWakeupSong = () => {
    if (value.trim() === "") {
      toast.info("url을 입력해주세요");
      setIsError(true);
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
            queryClient.invalidateQueries(
              QUERY_KEYS.wakeupSong.getPendingMusicList
            );
            queryClient.invalidateQueries(
              QUERY_KEYS.wakeupSong.getMyAllWakeupSong
            );
            setValue("");
          }
        },
        onError: (error) => {
          const axiosError = error as AxiosError;
          toast.error(ErrorHandler.applyWakeupSongError(axiosError));
          setIsError(true);
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
            queryClient.invalidateQueries(
              QUERY_KEYS.wakeupSong.getPendingMusicList
            );
            queryClient.invalidateQueries(
              QUERY_KEYS.wakeupSong.getMyAllWakeupSong
            );
            setValue("");
          },
          onError: (error) => {
            const errorCode = error as AxiosError;
            toast.error(ErrorHandler.applyWakeupSongError(errorCode));
            setIsError(true);
          },
        }
      );
    }
  };

  return {
    value,
    isError,
    handleChangeValue,
    handleKeyDown,
    handleRemoveClick,
    handleClickPostWakeupSong,
  };
};

export default useApplyWakeupSong;
