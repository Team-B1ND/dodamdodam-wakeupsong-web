import dodamAxios from "libs/axios/dodamAxios";
import { BroadcastClubMemberResponse } from "types/Member/member.type";

class MemberRepository {
  public async getBroadcastClubMemberCheck(): Promise<BroadcastClubMemberResponse> {
    const { data } = await dodamAxios.get(
      "/member/check/broadcast-club-member"
    );
    return data;
  }
}

export default new MemberRepository();
