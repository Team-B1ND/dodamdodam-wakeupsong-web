import { ClipLoader } from "react-spinners";
import * as L from "./style";

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "gray",
  color: "gray",
};

const Loading = ({ Loading }: any) => {
  return (
    <L.LoadingBox>
      <L.LoadingWrap>
        <ClipLoader loading={Loading} cssOverride={override} />
      </L.LoadingWrap>
    </L.LoadingBox>
  );
};

export default Loading;
