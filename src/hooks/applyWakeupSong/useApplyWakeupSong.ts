import wakeupSongRepository from "repository/wakeupSong.repository";

const useApplyWakeupSong = () => {
  const postApplyWakeupSong = async (wakeupSongUrl: string) => {
    try {
      await wakeupSongRepository.postApplyWakeupSong(wakeupSongUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return { postApplyWakeupSong };
};

export default useApplyWakeupSong;
