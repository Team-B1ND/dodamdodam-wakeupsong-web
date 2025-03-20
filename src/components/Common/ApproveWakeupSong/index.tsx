import { DodamErrorBoundary, DodamFilledButton } from "@b1nd/dds-web";
import { Suspense, useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import * as S from "./style";
import { useRecoilState, useResetRecoilState } from "recoil";
import { WakeupSongDate } from "store/ApproveWakeupSong/approveWakeupSong.store";
import Slider from "react-slick";
import TodayWakeupSong from "./TodayWakeupSong";
import TomorrowWakeupSong from "./TomorrowWakeupSong";
import MyWakeupSongFallback from "../Fallback/MyWakeupSongFallback";

const ApproveWakeupSong = () => {
  const theme = useTheme();
  const sliderRef = useRef<Slider | null>(null);
  const [date, setDate] = useRecoilState(WakeupSongDate);
  const resetDate = useResetRecoilState(WakeupSongDate);

  const handleClickNext = () => {
    sliderRef.current?.slickNext();
  };

  useEffect(() => {
    resetDate();
  }, [resetDate]);

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
    <S.Container>
      <S.Wrap>
        <S.Title>기상송</S.Title>
        <DodamFilledButton
          size="Small"
          width={110}
          text={date === "today" ? "오늘의 기상송" : "내일의 기상송"}
          typography={["Label", "Bold"]}
          textTheme={date === "today" ? "staticWhite" : "primaryNormal"}
          onClick={handleClickNext}
          customStyle={{
            border: `1px solid ${theme.primaryNormal}`,
            borderRadius: "12px",
            backgroundColor:
              date === "today" ? theme.primaryNormal : theme.backgroundNormal,
          }}
        />
      </S.Wrap>
      <Slider {...setting} ref={sliderRef}>
        <DodamErrorBoundary text="오류 발생" showButton={true}>
          <Suspense fallback={<MyWakeupSongFallback type="All" date="today" length={3} />}>
            <TodayWakeupSong />
          </Suspense>
        </DodamErrorBoundary>
        <DodamErrorBoundary text="오류 발생" showButton={true}>
          <Suspense fallback={<MyWakeupSongFallback type="All" date="tomorrow" length={3} />}>
            <TomorrowWakeupSong />
          </Suspense>
        </DodamErrorBoundary>
      </Slider>
    </S.Container>
  );
};

export default ApproveWakeupSong;
