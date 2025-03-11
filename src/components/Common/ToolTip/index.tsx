import * as S from "./style";

interface Props {
  isHideToolTip: boolean;
}

const ToolTip = ({ isHideToolTip }: Props) => {
  return (
    <S.Container isHideToolTip={isHideToolTip}>
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
