import React from "react"
import useGitHub from "../../Hooks"
import * as S from './styled';
import SubInfo from "../Subinfo/subinfo";
import UserInfo from "../UserInfo/userinfo";

const Profile = () => {
  const { gitState } = useGitHub();

  return (
    <S.Wrapper>
      <S.WrapperImage src={gitState.user.avatar} />
      <S.WrapperInfoUser>
      <UserInfo />
       <SubInfo />
      </S.WrapperInfoUser>
    </S.Wrapper>

  );
};

export default Profile;
