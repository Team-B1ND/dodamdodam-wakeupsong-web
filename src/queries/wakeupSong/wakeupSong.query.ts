import { useMutation, useQuery, UseQueryOptions } from "react-query";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { WakeupSongMusicLists } from "types/wakeupSong/wakeupSong.type";
import wakeupSongRepository from "repository/WakeupSong/wakeupSong.repository";

// 오늘 승인된 기상송 조회
export const useGetTodayMusicDataQuery = (
  options?: UseQueryOptions<
    WakeupSongMusicLists,
    AxiosError,
    WakeupSongMusicLists,
    string
  >
) => {
  return useQuery(
    QUERY_KEYS.wakeupSong.getTodayMusicData,
    () =>
      wakeupSongRepository.getWakeupSongTodayMusicData(
        new Date().toLocaleDateString().split(".")
      ),
    {
      ...options,
    }
  );
};

// 내일 승인된 기상송 조회
export const useGetTomorrowMusicDataQuery = (
  options?: UseQueryOptions<
    WakeupSongMusicLists,
    AxiosError,
    WakeupSongMusicLists,
    string
  >
) => {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  return useQuery(
    QUERY_KEYS.wakeupSong.getTomorrowMusicData,
    () =>
      wakeupSongRepository.getWakeupSongTodayMusicData(
        date.toLocaleDateString().split(".")
      ),
    {
      ...options,
    }
  );
};

// 대기 중인 기상송 조회
export const useGetPendingMusicListQuery = (
  options?: UseQueryOptions<
    WakeupSongMusicLists,
    AxiosError,
    WakeupSongMusicLists,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.wakeupSong.getPendingMusicList,
    () => wakeupSongRepository.getWakeupSongPendingMusicListData(),
    {
      ...options,
    }
  );

// 내 기상송 조회
export const useGetMyAllWakeupSongQuery = (
  options?: UseQueryOptions<
    WakeupSongMusicLists,
    AxiosError,
    WakeupSongMusicLists,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.wakeupSong.getMyAllWakeupSong,
    () => wakeupSongRepository.getWakeupSongMy(),
    {
      ...options,
    }
  );

// 기상송 신청
export const usePostApplyMusicMutation = () => {
  const mutation = useMutation((musicUrl: string) =>
    wakeupSongRepository.postApplyWakeupSong(musicUrl)
  );
  return mutation;
};

// 내 기상송 삭제
export const useDeleteMyWakeupSongMutation = () => {
  const mutation = useMutation((musicId: number) =>
    wakeupSongRepository.deleteMyWakeupSong(musicId)
  );
  return mutation;
};

// 기상송 승인
export const useAllowWakeupSongMutation = () => {
  const mutation = useMutation((id: number) =>
    wakeupSongRepository.wakeupSongAllow(id)
  );
  return mutation;
};

// 기상송 거절
export const useDenyWakeupSongMutation = () => {
  const mutation = useMutation((id: number) =>
    wakeupSongRepository.wakeupSongDeny(id)
  );
  return mutation;
};
