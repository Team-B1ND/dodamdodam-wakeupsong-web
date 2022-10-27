import { palette } from "style/palette";
import styled from "styled-components";

export const MelonChartContainer = styled.div`
  width: 100%;
  height: 61%;
  margin-top: 60px;
`;

export const ChartListContainer = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MusicApplyBtn = styled.div`
  width: 35px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  color: #fff;
  position: relative;
  left: 40px;
`;

export const MelonChartInfoWrap = styled.button`
  border: none;
  outline: none;
  width: 344px;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s;
  text-align: left;
  cursor: pointer;
  position: relative;
  left: 0px;

  &:focus {
    left: -45px;
  }

  .Rank {
    font-size: 0.9rem;
    width: 40px;
    text-align: center;
  }
`;

export const ChartWrapper = styled.div`
  width: 111%;
  display: flex;
  background-color: ${palette.main};
  transition: 0.3s;
`;

export const ChartInfo = styled.div`
  width: 200px;
  display: grid;
  align-items: center;
  gap: 5px;
`;

export const ChartName = styled.div`
  font-weight: bold;
  font-size: 0.95rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ArtistName = styled.div`
  font-size: 0.9rem;
  color: ${palette.gray[500]};
`;

export const Thumbnail = styled.div<{ src: string }>`
  width: 45px;
  height: 45px;
  background-size: cover;
  background-position: center center;
  background-image: url(${({ src }) => src});
`;

export const RankContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
