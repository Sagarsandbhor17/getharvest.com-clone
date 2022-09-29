import styled from "styled-components";
import { integrateData } from "../../kirandata";
import searchImg from "../../kiranmedia/searchIcon.png";
import BoxCard from "./BoxCard";

const Container = styled.div`
  background-color: #fff8f1;
  width: 90%;
  margin: auto;
  margin-top: 120px;
  padding-bottom: 50px;
  /* margin-bottom: 50px; */

  /* padding: 70px 20px 50px 100px; */
  /* border: 2px solid red; */
`;

const InputContainer = styled.div`
  width: 95%;
  margin: auto;
  background-color: white;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  
`;
const Logo = styled.img``;
const Input = styled.input`
  width: 100%;
  height: 92%;
  font-size: 24px;
  border-radius: 10px;
  padding-left: 10px;
  border: none;
  outline: none;
`;

const FilterContainer = styled.div`
  /* width: 90%; */
  display: flex;
  /* border: 1px solid black; */
  padding: 10px;
  padding-left: 20px;
  margin-top: 50px;
`;
const FilterCategory = styled.div`
  flex: 1;
  /* background-color: blue; */
  padding: 10px;
`;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  width: 80%;
  font-size: 20px;
  border-radius: 10px;
  background-color: #fff8f1;
  text-align: left;

  cursor: pointer;
  &:first-child {
    background-color: #fee8d8;
    color: #fa5d00;
  }
  &:hover {
    background-color: #fee8d8;
  }
`;
const FilterData = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  /* border: 1px solid black; */

  /* background-color: crimson; */
`;
const Line = styled.hr`
  margin: auto;
  width: 85%;
  height: 1px;
  background-color: red;
  color: red;
`;
const SearchInt = () => {
  return (
    <>
      <Container>
        <InputContainer>
          <Logo src={searchImg}></Logo>
          <Input placeholder="Find an app or services you use"></Input>
        </InputContainer>
        <FilterContainer>
          <FilterCategory>
            <Button>All Integrations</Button>
            <Button>Analytics & reporting</Button>
            <Button>Browser extensions</Button>
            <Button>Communication & CRM</Button>
            <Button>Development & connectivity</Button>
            <Button>Featured integrations</Button>
            <Button>Finance & payments</Button>
            <Button>Issue tracking & support</Button>
            <Button>Productivity</Button>
            <Button>Project management</Button>
          </FilterCategory>
          <FilterData>
            {integrateData.map((item) => (
              <BoxCard key={item.id} item={item} />
            ))}
          </FilterData>
        </FilterContainer>
      </Container>
      <Line />
    </>
  );
};

export default SearchInt;
