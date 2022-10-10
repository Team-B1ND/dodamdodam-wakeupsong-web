import { palette } from "style/palette";
import styled from "styled-components";

export const DibsStorageWrapContainer = styled.div`
  width: 75%;
  height: 100%;
  overflow: auto;
  padding: 90px 0 0 60px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DibsStorageWrap = styled.div`
  width: 100%;
`;

export const InfoTitle = styled.div`
  width: 100%;
  margin: 50px 0 25px 0;
  display: flex;
`;

export const MusicName = styled.div`
  width: 1029px;
  padding-left: 200px;
  font-size: 0.9rem;
  color: ${palette.gray[400]};
`;

export const ChannelName = styled.div`
  width: 199px;
  font-size: 0.9rem;
  color: ${palette.gray[400]};
`;

export const ApplyDay = styled.div`
  font-size: 0.9rem;
  color: ${palette.gray[400]};
`;

export const ApplyDate = styled.div`
  margin-left: 20px;
  font-size: 0.95rem;
`;

export const ChannelNameData = styled.div`
  width: 150px;
  margin-left: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MusicInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  gap: 30px;
  border-top: 1px solid ${palette.gray[200]};
`;

export const MusicThumbnailImg = styled.div<{ src: string }>`
  width: 100px;
  height: 55px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  background-image: url(${({ src }) => src});
`;

export const ApplyRanking = styled.div`
  width: 40px;
  font-weight: bold;
  text-align: center;
`;

export const VideoTitle = styled.div`
  width: 750px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MusicNull = styled.div`
  width: 97%;
  height: 200px;
  border-top: 1px solid ${palette.inputBorderColor};
  color: ${palette.gray[400]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
