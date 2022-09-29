import styled from "styled-components";
import circleImg from "../../kiranmedia/circle.png";
import { mobile } from "./IntegrationResponsive";

const Container = styled.div`
  margin: auto;
  height: 70vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
    height: "50vh",
    width: "100%",
    padding: "5px",
    marginBottom:"50px"
  })}/* border: 2px solid black; */
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
  ${mobile({ paddingLeft: "30px" })}
`;
const TopText = styled.h1`
  font-size: 46px;
  font-weight: 380;
  line-height: 60px;
  letter-spacing: 1px;
  text-align: left;
  ${mobile({ fontSize: "40px", lineHeight: "50px",marginBottom:"20px" })}
`;
const Text = styled.div`
  font-size: 31px;
  font-weight: 350;
  letter-spacing: 1px;
  text-align: left;
  ${mobile({ fontSize: "25px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ display: "none" })}
`;

const Image = styled.img`
  width: 450px;
  height: 450px;
  object-fit: contain;
`;
const Line = styled.hr`
  width: 100%;
  height: 0.5px;
  background-color: red;
`;
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
