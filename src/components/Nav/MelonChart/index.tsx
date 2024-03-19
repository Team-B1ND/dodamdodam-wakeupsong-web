import Title from "components/Common/Title";
import useMelonChart from "hooks/melonChart/useMelonChart";
import { useGetMelonChartLists } from "queries/melonChart/melonChart.query";
import * as S from "./style";

const MelonChart = () => {
  const { data } = useGetMelonChartLists();
  const { melonChartApply } = useMelonChart();

  return (
    <S.MelonChartContainer>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => window.open("https://www.melon.com/chart/index.htm")}
      >
        <Title
          titleMent="멜론 차트"
          subTitleMent="인기가 많은 노래들을 모아봤어요!"
        />
      </div>

      <S.ChartListContainer>
        {data?.data &&
          data.data.map((item, idx) => {
            return (
              <S.ChartWrapper key={idx + 1}>
                <S.MelonChartInfoWrap>
                  <S.RankContainer>
                    <div className="Rank">{item.rank}위</div>
                  </S.RankContainer>
                  <S.Thumbnail src={item.thumbnail} />
                  <S.ChartInfo>
                    <S.ChartName>{item.name}</S.ChartName>
                    <S.ArtistName>{item.artist}</S.ArtistName>
                  </S.ChartInfo>
                  <S.MusicApplyBtn
                    onClick={() => melonChartApply(item.artist, item.name)}
                  >
                    신청
                  </S.MusicApplyBtn>
                </S.MelonChartInfoWrap>
              </S.ChartWrapper>
            );
          })}
      </S.ChartListContainer>
    </S.MelonChartContainer>
  );
};

export default MelonChart;
