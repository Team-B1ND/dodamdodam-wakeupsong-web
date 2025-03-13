import { useQueryClient } from "react-query";
import { useDeleteMyWakeupSongMutation } from "queries/WakeupSongs/wakeupSong.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { QUERY_KEYS } from "queries/queryKey";

const useDeleteMyWakeupSong = () => {
  const queryClient = useQueryClient();
  const deleteMyWakeupSong = useDeleteMyWakeupSongMutation();

  const handleDeleteMyWakeupSong = (id: number) => {
    deleteMyWakeupSong.mutate(id, {
      onSuccess() {
        queryClient.invalidateQueries(QUERY_KEYS.wakeupSong.getMyAllWakeupSong);
        B1ndToast.showSuccess("신청한 기상송을 삭제했습니다!");
      },
      onError: () => {
        B1ndToast.showError("신청한 기상송을 삭제하지 못했습니다!");
      },
    });
  };

  return {
    handleDeleteMyWakeupSong,
  };
};

export default useDeleteMyWakeupSong;
