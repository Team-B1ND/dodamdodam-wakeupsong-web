import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { UseQueryOptions, useQuery } from "react-query";
import memberRepository from "repository/Member/member.repository";
import { BroadcastClubMemberResponse } from "types/Member/member.type";

export const useGetBroadcastClubMemberCheckQuery = (
  options?: UseQueryOptions<
    BroadcastClubMemberResponse,
    AxiosError,
    BroadcastClubMemberResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.member.getBroadCastClubMember,
    () => memberRepository.getBroadcastClubMemberCheck(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
