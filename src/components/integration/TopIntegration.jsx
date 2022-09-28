import styled from "styled-components";
import circleImg from "../../kiranmedia/circle.png"
const Container = styled.div`
  margin: auto;
  height: 80vh;
  width: 90%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid black; */
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
`;
const TopText = styled.h1`
  font-size: 46px;
  font-weight: 370;
  line-height: 60px;
  letter-spacing: 1px;
`;
const Text = styled.div`
  font-size: 31px;
  font-weight: 350;
  letter-spacing: 1px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
    width: 450px;
    height: 450px;
    object-fit: contain;
`
const Line = styled.hr`
    width:100%;
    height: 0.5px;
    background-color:red;
`
const TopIntegration = () => {
  return (
    <>
      <Container>
        <Left>
          <TopText>
            Time tracking integrated with your team’s favorite apps
          </TopText>
          <Text>
            Harvest works with the most popular tools so your team can track
            time effortlessly.
          </Text>
        </Left>
        <Right>
            <Image src={circleImg} />
        </Right>
      </Container>
      <Line />
    </>
  );
};

export default TopIntegration;
