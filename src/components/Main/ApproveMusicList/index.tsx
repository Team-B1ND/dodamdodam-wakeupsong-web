import { useEffect, useRef } from "react";
import * as S from "./style";
import TodayMusic from "components/common/ApproveMusic/TodayMusic";
import TomorrowMusic from "components/common/ApproveMusic/TomorrowMusic";
import { useRecoilState, useResetRecoilState } from "recoil";
import { WakeupSongDate } from "store/reducer";
import Slider from "react-slick";

const ApproveMusicList = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [date, setDate] = useRecoilState(WakeupSongDate);
  const resetDate = useResetRecoilState(WakeupSongDate);

  const handleClickNext = () => {
    sliderRef.current?.slickNext();
  };

  useEffect(() => {
    resetDate();
  }, []);

  const setting = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prevIdx: number, _: number) => {
      if (prevIdx) {
        sliderRef.current?.slickPrev();
        setDate("today");
      } else {
        setDate("tomorrow");
      }
    },
  };

  return (
    <S.ApproveMusicListContainer>
      <S.ApproveChangeButton nowDate={date} onClick={handleClickNext}>
        {date === "today" ? "오늘의 기상송" : "내일의 기상송"}
      </S.ApproveChangeButton>
      <Slider {...setting} ref={sliderRef}>
        <TodayMusic />
        <TomorrowMusic />
      </Slider>
    </S.ApproveMusicListContainer>
  );
};

export default ApproveMusicList;
