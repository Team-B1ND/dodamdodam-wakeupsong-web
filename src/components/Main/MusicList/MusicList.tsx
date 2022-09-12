import useWakeupSongMyData from "hooks/wakeupSongMy/useWakeupSongMyData";
import * as S from "./MusicList.style";

const MusicList = () => {

  const { myData } = useWakeupSongMyData();

  return (
    <S.MusicListContainer>
      <S.MusicListTitle>
        기상송
      </S.MusicListTitle>

      {myData && myData.map((item, idx) => {
        const createdDate = item.createdDate.split(" ")[0];

        return (
          <S.MusicListWrapper key={idx}>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>

            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
            <S.MusicContainer >
              <S.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.channelTitle>{item.channelTitle}</S.channelTitle>
                <S.createdDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.createdDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
          </S.MusicListWrapper>

        )
      })}
    </S.MusicListContainer>
  );
};

export default MusicList;
