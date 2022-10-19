import styled from "styled-components";

export const MelonChartContainer = styled.div`
  width: 100%;
  height: 65%;
  margin-top: 50px;
`;

export const ChartListContainer = styled.div`
  width: 100%;
  height: 92%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ChartInfo = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ChartName = styled.div``;

export const ArtistName = styled.div``;

export const Thumbnail = styled.div<{ src: string }>`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center center;
  background-image: url(${({ src }) => src});
`;

// export const ChartName = styled.div`
// `;
// export const ChartName = styled.div`
// `;
