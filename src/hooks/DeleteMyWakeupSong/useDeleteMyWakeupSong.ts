import { useQueryClient } from "react-query";
import { useDeleteMyWakeupSongMutation } from "queries/WakeupSong/wakeupSong.query";
import { toast } from "react-toastify";

const useDeleteMyWakeupSong = () => {
  const queryClient = useQueryClient();
  const deleteMyWakeupSong = useDeleteMyWakeupSongMutation();

  const handleDeleteMyWakeupSong = (id: number) => {
    deleteMyWakeupSong.mutate(id, {
      onSuccess() {
        queryClient.invalidateQueries("myAllWakeupSong/useGetMyAllWakeupSong");
        toast.success("신청한 기상송을 삭제했습니다!");
      },
      onError: () => {
        toast.error("신청한 기상송을 삭제하지 못했습니다!");
      },
    });
  };

  return {
    handleDeleteMyWakeupSong,
  };
};

export default useDeleteMyWakeupSong;
