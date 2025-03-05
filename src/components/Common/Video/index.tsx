import useDeleteMyWakeupSong from "hooks/DeleteMyWakeupSong/useDeleteMyWakeupSong";
import * as S from "./style";
import { Trash } from "@b1nd/dds-web";

interface Props {
  id?: number;
  title: string;
  label: string;
  date?: string;
  img: string;
  url: string;
  isDelete?: boolean;
}

const Video = ({ id, title, label, date, img, url, isDelete }: Props) => {
  const { ...deleteMyWakeupSong } = useDeleteMyWakeupSong();

  return (
    <S.Container>
      <S.VideoImg src={img} onClick={() => window.open(url)} />
      <S.VideoInfo>
        <S.VideoTitle>{title}</S.VideoTitle>
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
