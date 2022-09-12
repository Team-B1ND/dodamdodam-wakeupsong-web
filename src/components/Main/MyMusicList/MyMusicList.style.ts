import styled from "styled-components";

export const MyMusicListContainer = styled.div`
  margin-top: 60px;
  padding: 30px 170px;
  display: grid;
  gap: 10px;
`;

export const MyMusicListTitle = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const MyMusicListContents = styled.div`
  display: flex;
  gap: 10px;
`;

export const MyMusicContainer = styled.div`
  width: 300px;
  cursor: pointer;
`;

export const MyMusicThumbnailImg = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const MyMusicThumbnailTitle = styled.div`
  color: #fff;
  width: 300px;
  padding: 15px 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  backdrop-filter: blur(4px);
  transform: translateY(-47px);
  border-radius: 0 0 5px 5px;
  background-color: rgba(0, 0, 0, 0.6);
`;
