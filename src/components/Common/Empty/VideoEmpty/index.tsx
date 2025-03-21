import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

interface Props {
  type: "All" | "My";
}

const VideoEmpty = ({ type }: Props) => {
  return (
    <Container type={type}>
      <Text>
        {type === "All"
          ? "승인된 기상송이 없습니다"
          : "신청한 기상송이 없습니다"}
      </Text>
    </Container>
  );
};

const Container = styled.div<{ type: "All" | "My" }>`
  width: 100%;
  aspect-ratio: ${({ type }) => (type === "All" ? "16 / 6" : "16 / 10")};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) and (max-width: 797px) {
    height: 150px;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Body1.Medium}
`;

export default VideoEmpty;
