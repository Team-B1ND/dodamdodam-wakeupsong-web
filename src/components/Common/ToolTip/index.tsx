import * as S from "./style";

interface Props {
  isFirstVisit: boolean;
}

const ToolTip = ({ isFirstVisit }: Props) => {
  return (
    <S.Container isFirstVisit={isFirstVisit}>
      <S.ToolTipWrap>
        <S.ToolTip>
          클릭하여 <strong>신청</strong>해보아요!
        </S.ToolTip>
      </S.ToolTipWrap>
      <S.ToolTipArrow></S.ToolTipArrow>
    </S.Container>
  );
};

export default ToolTip;
