import * as S from "./style";

export type TypeProps = "All" | "My";
type DateProps = "today" | "tomorrow";

interface Props {
  type: TypeProps;
  length: number;
  date?: DateProps;
}

const MyWakeupSongFallback = ({ type, date, length }: Props) => {
  return (
    <S.Container type={type}>
      <S.Title>
        {type === "All"
          ? date === "today"
            ? "오늘의 기상송"
            : "내일의 기상송"
          : "내가 신청한 기상송"}
      </S.Title>
      <S.Wrap type={type}>
        {Array.from({ length: length }).map((_, idx) => (
          <S.Box key={idx} type={type}>
            <S.Img type={type}></S.Img>
            <S.Info type={type}>
              <S.VideoTitle />
              <S.Artist />
              <S.Date />
            </S.Info>
          </S.Box>
        ))}
      </S.Wrap>
    </S.Container>
  );
};

export default MyWakeupSongFallback;
