import customAxios from "lib/axios/customAxios";
import { BroadcastClubMemberResponse } from "types/Member/member.type";

class MemberRepository {
  public async getBroadcastClubMemberCheck(): Promise<BroadcastClubMemberResponse> {
    const { data } = await customAxios.get("/");
    return data;
  }
}

export default new MemberRepository();
