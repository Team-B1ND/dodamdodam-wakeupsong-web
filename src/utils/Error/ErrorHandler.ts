import { AxiosError } from "axios";

class ErrorHandler {
  public applyWakeupSongError = (error: AxiosError) => {
    const status = error.response?.status;

    switch (status) {
      case 422:
        return "MV형식은 지원하지 않습니다!";
      case 423:
        return "이미 이번주에 기상송을 신청했습니다!";
      case 500:
        return "서버 오류가 발생하였습니다.";
      default:
        return "기상송 신청을 실패했습니다!";
    }
  };
}

const errorHandler = new ErrorHandler();
export default errorHandler;
