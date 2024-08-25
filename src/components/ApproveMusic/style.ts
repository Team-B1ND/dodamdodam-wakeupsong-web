import { palette } from "style/palette";
import styled, { css } from "styled-components";

export const ApproveMusicContainer = styled.div`
  width: 73%;
  height: 100%;
  overflow: auto;
  padding: 90px 40px 0 40px;
  background-color: ${palette.gray[50]};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleWrap = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const MusicChangeButton = styled.button<{ nowDate: string }>`
  width: 95px;
  height: 32px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid ${palette.main};
  border-radius: 10px;
  cursor: pointer;

  ${({ nowDate }) =>
    nowDate === "today"
      ? css`
          color: white;
          background-color: ${palette.main};
        `
      : css`
          color: ${palette.main};
          background-color: white;
        `}
`;

export const ApproveMusicWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const InfoTitle = styled.div`
  width: 100%;
  margin: 50px 0 25px 0;
  display: flex;
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
