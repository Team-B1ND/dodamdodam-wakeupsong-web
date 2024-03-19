import * as S from "./style";

interface Props {
  titleMent: string;
  subTitleMent: string;
}

const Title = ({ titleMent = "", subTitleMent = "" }: Props) => {
  return (
    <S.MusicListTitle>
      <S.TitleMent>{titleMent}</S.TitleMent>
      <S.SubTitleMent>{subTitleMent}</S.SubTitleMent>
    </S.MusicListTitle>
  );
};

export default Title;
