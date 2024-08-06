import React from "react";
import styled from "styled-components";
import { FaBell, FaEnvelope } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { RiAppsFill } from "react-icons/ri";

const HeaderContainer = styled.header`
  background: #202028;
  padding: 0px 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 630px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 630px) {
    width: 100%;
  }
`;

const SearchIcon = styled(CiSearch)`
  position: absolute;
  left: 10px;
  color: gray;
`;

const SearchBar = styled.input`
  padding: 10px 10px 10px 40px;
  border-radius: 5px;
  border: none;
  width: 300px;
  background: #2a2b30;
  color: #b0b1b5;

  @media (max-width: 630px) {
    width: calc(100% - 40px);
    margin-top:10p
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 630px) {
    width: 100%;
    margin-top: 10px;
    margin-bottom:10px;
    margin-left:50px
  }
`;

const IconWrapper = styled.div`
  padding: 10px;
  border-radius: 50%;
  background: #45454d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  height: 30px;
 
`;

const SidebarItem1 = styled.div`
  color: #7195f4;
  font-size: 22px;
  margin: 15px 0;

  @media (max-width: 630px) {
    font-size: 18px;
    margin: 10px 0;
  }
`;

const NavLeftContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 630px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Header = ({ showHandler }) => {
  return (
    <HeaderContainer>
      <NavLeftContainer>
        <SidebarItem1 onClick={showHandler}>
          <Icon>
            <RiAppsFill />
          </Icon>
        </SidebarItem1>
        <SearchWrapper>
          <SearchIcon size={20} />
          <SearchBar placeholder="Search..." />
        </SearchWrapper>
      </NavLeftContainer>
      <Icons>
        <IconWrapper>
          <FaEnvelope />
        </IconWrapper>
        <IconWrapper>
          <AiOutlineSetting />
        </IconWrapper>
        <IconWrapper>
          <FaBell />
        </IconWrapper>
        <UserImage
          src="https://tse4.mm.bing.net/th?id=OIP.T6Ea_g7kHwVoE9mRHhjbQwHaJQ&pid=Api&P=0&h=180"
          alt="User"
        />
      </Icons>
    </HeaderContainer>
  );
};

export default Header;
