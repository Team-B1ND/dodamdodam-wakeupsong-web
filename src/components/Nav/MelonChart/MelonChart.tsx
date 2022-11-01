import Title from "components/Common/Title";
import useMelonChart from "hooks/melonChart/useMelonChart";
import { useGetMelonChartLists } from "querys/melonChart/melonChart.query";
import * as Style from "./MelonChart.style";

const MelonChart = () => {

  const { data } = useGetMelonChartLists();
  const { melonChartApply } = useMelonChart();

  return (
    <Style.MelonChartContainer>
      <div style={{ cursor: "pointer" }} onClick={() => window.open("https://www.melon.com/chart/index.htm")}>
        <Title titleMent="멜론 차트" subTitleMent="인기가 많은 노래들을 모아봤어요!" />
      </div>

      <Style.ChartListContainer>
        {data?.data && data.data.map((item, idx) => {
          return (
            <Style.ChartWrapper key={idx + 1}>
              <Style.MelonChartInfoWrap >
                <Style.RankContainer>
                  <div className="Rank">{item.rank}위</div>
                </Style.RankContainer>
                <Style.Thumbnail src={item.thumbnail} />
                <Style.ChartInfo>
                  <Style.ChartName>{item.name}</Style.ChartName>
                  <Style.ArtistName>{item.artist}</Style.ArtistName>
                </Style.ChartInfo>
                <Style.MusicApplyBtn onClick={() => melonChartApply(item.artist, item.name)} >신청</Style.MusicApplyBtn>
              </Style.MelonChartInfoWrap>
            </Style.ChartWrapper>
          )
        })}
      </Style.ChartListContainer>
    </Style.MelonChartContainer>
  );
};

export default MelonChart;
