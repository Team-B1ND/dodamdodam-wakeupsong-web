import { Link } from "react-router-dom";
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
`;

export const SeeMore = styled(Link)`
  font-size: 0.9rem;
  color: ${palette.gray[500]};

  &:hover {
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
    background-color: ${palette.gray[300]};
  }
  &:hover {
    background-color: ${palette.gray[300]};
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
`;

export const ApplyDayAndDateText = styled.div<{ type: "DAY" | "DATE" }>`
  color: ${({ type }) => (type === "DAY" ? "#c5c5c5" : "#a1a1a1")};

  @media screen and (max-width: 1550px) {
    display: none;
  }
`;

export const ApplyBtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const AllowAndDenyBtn = styled.button<{ buttonType: "ALLOW" | "DENY" }>`
  width: 75px;
  height: 35px;

  border: none;
  border-radius: 15px;
  color: #fff;

  cursor: pointer;
  outline: none;
  background-color: ${({ buttonType }) =>
    buttonType === "ALLOW" ? palette.blue[300] : palette.red[300]};

  transition: all 0.15s ease-in-out;
  &:active {
    opacity: 0.7;
  }
`;

export const MusicNull = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
