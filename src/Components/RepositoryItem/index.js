import React from "react";
import * as S from './styled'

const RepositoryItem = ({name, linkToRepos, fullName}) =>{
    return(
        <S.Wrapper>
            <S.WrapperTitle>{name}</S.WrapperTitle>
            <S.WrapperFullName>Full name:</S.WrapperFullName>
            <S.WrapperLink href={linkToRepos} target="_blank">
             {fullName}</S.WrapperLink>
        </S.Wrapper>
    );

};

export default RepositoryItem;