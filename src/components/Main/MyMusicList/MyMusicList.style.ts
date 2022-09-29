import styled from "styled-components";

export const MyMusicListContainer = styled.div`
  margin-top: 50px;
  display: grid;
  gap: 10px;
`;

export const MyMusicListTitle = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const MyMusicListContents = styled.div`
  width: 97%;
  height: 255px;
  overflow: scroll;
  display: flex;
  gap: 15px;
`;

export const MyMusicContainer = styled.div`
  width: 325px;
  height: 180px;
  cursor: pointer;
`;

export const MyMusicThumbnailImg = styled.div<{ src: string }>`
  width: 325px;
  height: 180px;
  background-size: cover;
  background-position: center center;
  background-image: url(${({ src }) => src});
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
`;
