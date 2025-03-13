import { AxiosError } from "axios";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useQueryClient } from "react-query";
import { usePostApplyMusicMutation } from "queries/WakeupSongs/wakeupSong.query";
import { usePostMelonChartApplyMutation } from "queries/MelonCharts/melonChart.query";
import ErrorHandler from "utils/Error/ErrorHandler";
import { QUERY_KEYS } from "queries/queryKey";

const useApplyWakeupSong = () => {
  const queryClient = useQueryClient();
  const [value, setValue] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
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
    if (!isEnabled) return;

    setIsEnabled(false);

    if (value.trim() === "") {
      B1ndToast.showInfo("url을 입력해주세요");
      setIsError(true);
      setIsEnabled(true);
      return;
    }

    // 기상송을 링크로 신청한 경우
    if (value.startsWith("http")) {
      postApplyMusicMutation.mutate(value, {
        onSuccess: (data) => {
          if (data.status === 226) {
            B1ndToast.showError(`${data.message}`);
          } else {
            B1ndToast.showSuccess("기상송을 신청했습니다!");
            queryClient.invalidateQueries(
              QUERY_KEYS.wakeupSong.getPendingMusicList
            );
            queryClient.invalidateQueries(
              QUERY_KEYS.wakeupSong.getMyAllWakeupSong
            );
            setValue("");
          }
          setIsEnabled(true);
        },
        onError: (error) => {
          const axiosError = error as AxiosError;
          B1ndToast.showError(ErrorHandler.applyWakeupSongError(axiosError));
          setIsError(true);
          setIsEnabled(true);
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
            B1ndToast.showSuccess("기상송을 신청했습니다!");
            queryClient.invalidateQueries(
              QUERY_KEYS.wakeupSong.getPendingMusicList
            );
            queryClient.invalidateQueries(
              QUERY_KEYS.wakeupSong.getMyAllWakeupSong
            );
            setValue("");
            setIsEnabled(true);
          },
          onError: (error) => {
            const errorCode = error as AxiosError;
            B1ndToast.showError(ErrorHandler.applyWakeupSongError(errorCode));
            setIsError(true);
            setIsEnabled(true);
          },
        }
      );
    }
  };

  return {
    value,
    isError,
    isEnabled,
    handleChangeValue,
    handleKeyDown,
    handleRemoveClick,
    handleClickPostWakeupSong,
  };
};

export default useApplyWakeupSong;
