import * as S from "./style";
import { Trash } from "@b1nd/dds-web";
import textTransform from "utils/Text/textTransform";
import useDeleteMyWakeupSong from "hooks/DeleteMyWakeupSong/useDeleteMyWakeupSong";

export type TypeProps = "All" | "My";

interface Props {
  id?: number;
  type: TypeProps;
  title: string;
  label: string;
  date?: string;
  img: string;
  url: string;
  isDelete?: boolean;
}

const Video = ({ id, type, title, label, date, img, url, isDelete }: Props) => {
  const { ...deleteMyWakeupSong } = useDeleteMyWakeupSong();

  return (
    <S.Container type={type}>
      <S.VideoImg src={img} type={type} onClick={() => window.open(url)} />
      <S.VideoInfo type={type}>
        <S.VideoTitle>{textTransform.ellipsis(title, 50)}</S.VideoTitle>
        <S.Wrap>
          <S.Box>
            <S.VideoLabel>{label}</S.VideoLabel>
            <S.VideoDate>{date}</S.VideoDate>
          </S.Box>
          {isDelete && (
            <S.DeleteIconWrap
              onClick={() => deleteMyWakeupSong.handleDeleteMyWakeupSong(id!)}>
              <Trash color="labelStrong" $svgStyle={{ cursor: "pointer" }} />
            </S.DeleteIconWrap>
          )}
        </S.Wrap>
      </S.VideoInfo>
    </S.Container>
  );
};

export default Video;
