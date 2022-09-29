import Title from "components/Common/Title";
import * as S from "./Storage.style";


const Storage = () => {
  return (
    <S.StorageWrapContainer>
      <S.StorageListContainer>
        <Title titleMent={"보관함"} subTitleMent={""} />

      </S.StorageListContainer>
    </S.StorageWrapContainer>
  );
};

export default Storage;
