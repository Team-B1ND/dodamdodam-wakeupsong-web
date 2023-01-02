import { palette } from "style/palette";
import styled from "styled-components";

export const MyMusicDetailWrapContainer = styled.div`
  width: 73%;
  height: 100%;
  overflow: auto;
  padding: 90px 40px 0 40px;
  background-color: ${palette.gray[50]};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MyMusicListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const MusicName = styled.div`
  width: 50%;
  font-size: 0.9rem;
  color: ${palette.gray[400]};
`;

export const ApplyDate = styled.div`
  font-size: 0.9rem;
`;

export const ChannelNameData = styled.div`
  width: 10%;
  margin-left: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ChannelName = styled.div`
  width: 10%;
  font-size: 0.9rem;
  color: ${palette.gray[400]};
`;

export const ApplyDay = styled.div`
  font-size: 0.9rem;
  color: ${palette.gray[400]};
`;

export const MusicInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
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
  width: 50%;
  text-align: center;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MusicNull = styled.div`
  width: 96%;
  height: 200px;
  border-top: 1px solid ${palette.gray[200]};
  color: ${palette.gray[400]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
