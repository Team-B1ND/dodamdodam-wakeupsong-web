import { palette } from "style/palette";
import styled from "styled-components";

export const MyMusicListContainer = styled.div`
  margin-top: 50px;
  display: grid;
  gap: 10px;
  padding-left: 40px;
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

export const MyMusicListTitle = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const MyMusicListContents = styled.div`
  width: 97.5%;
  height: 255px;
  overflow: auto;
  display: flex;
  gap: 5px;
`;

export const MyMusicContainer = styled.div`
  width: 325px;
  height: 180px;
  cursor: pointer;
`;

export const MyMusicThumbnailImg = styled.div<{ src: string }>`
  width: 323px;
  height: 178px;
  background-size: cover;
  background-position: center center;
  background-image: url(${({ src }) => src});
  display: grid;
  align-items: center;
  &:hover {
    &::before {
      content: "▶️";
      font-size: 1.5rem;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const MyMusicThumbnailTitle = styled.div`
  padding: 10px 0px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CreatedDateContainer = styled.div`
  font-size: 0.85rem;
  display: flex;
  gap: 7px;
`;

export const MusicNull = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.gray[400]};
`;
