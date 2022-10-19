import Title from "components/Common/Title";
import { useGetMelonChartLists } from "querys/melonChart/melonChart";
import * as S from "./MelonChart.style";

const MelonChart = () => {
  const { data } = useGetMelonChartLists();

  return (
    <S.MelonChartContainer>
      <Title titleMent="멜론 차트" subTitleMent="" />

      <S.ChartListContainer>
        {data?.data && data.data.map((item, idx) => {
          return (
            <S.ChartWrapper key={idx + 1} >
              <S.Thumbnail src={item.thumbnail} />
              <S.ChartInfo>
                <S.ChartName>{item.name}</S.ChartName>
                <S.ArtistName>{item.artist}</S.ArtistName>
              </S.ChartInfo>
            </S.ChartWrapper>
          )
        })}
      </S.ChartListContainer>
    </S.MelonChartContainer>
  );
};

export default MelonChart;
