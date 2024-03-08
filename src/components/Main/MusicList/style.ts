import { palette } from "style/palette";
import styled from "styled-components";

export const MusicListContainer = styled.div`
  margin-top: 50px;
  display: grid;
  gap: 20px;
  padding-left: 40px;
`;

export const MusicListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 15px;
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  width: 96.3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .seeMoreDetails {
    font-size: 0.9rem;
    color: ${palette.gray[500]};
  }
  .seeMoreDetails:hover {
    text-decoration: underline;
  }
`;

export const MusicContainer = styled.button`
  width: 23.5%;
  gap: 10px;
  border: none;
  outline: none;
  display: flex;
  border-radius: 5px;
  align-items: center;
  background-color: ${palette.gray[50]};
  &:focus {
    background-color: ${palette.gray[200]};
  }
  &:hover {
    background-color: ${palette.gray[200]};
  }
`;

export const MusicTumbnailImg = styled.div<{ src: string }>`
  min-width: 100px;
  min-height: 55px;
  border-radius: 3px;
  background-size: cover;
  background-position: center center;
  background-image: url(${({ src }) => src});
  display: grid;
  align-items: center;
  &:hover {
    &::before {
      content: "▶️";
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  cursor: pointer;
`;

export const ApplyRanking = styled.div`
  text-align: left;
  font-weight: bold;
`;

export const TitleWrap = styled.div`
  width: 100%;
  gap: 3px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const TitleTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const VideoTitle = styled.div`
  font-size: 0.9rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
`;

export const CreatedDateContainer = styled.div`
  font-size: 0.85rem;
  display: flex;
  gap: 7px;

  .applyDay {
    color: #c5c5c5;
  }
  .applyDate {
    color: #a1a1a1;
  }
  @media screen and (max-width: 1550px) {
    .applyDay {
      display: none;
    }
    .applyDate {
      display: none;
    }
  }
`;

export const ApplyBtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const AllowBtn = styled.button`
  width: 75px;
  height: 35px;
  background-color: ${palette.blue[300]};
  border: none;
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
  outline: none;
`;

export const RefuseBtn = styled.button`
  width: 75px;
  height: 35px;
  background-color: ${palette.red[300]};
  border: none;
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
  outline: none;
`;

export const MusicNull = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
