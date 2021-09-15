import React from 'react';
import useGitHub from '../../Hooks';
import * as S from './styled';

const UserInfo = () => {

const {gitState} = useGitHub();
    return (
        <div>
            <h1>{gitState.user.name}</h1>
            <S.WrapperUserGeneric>
                <h3>Username:</h3>
                <a
                    href={gitState.user.html_url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {gitState.user.login}
                </a>
            </S.WrapperUserGeneric>
            <S.WrapperUserGeneric>
                <h3>Company:</h3>
                <span>{gitState.user.company}</span>
            </S.WrapperUserGeneric>
            <S.WrapperUserGeneric>
                <h3>Location:</h3>
                <span>{gitState.user.location}</span>
            </S.WrapperUserGeneric>
            <S.WrapperUserGeneric>
                <h3>Blog:</h3>
                <a
                    href={gitState.user.blog} target="_blank" rel="noreferrer"
                >
                    {gitState.user.blog}
                </a>
            </S.WrapperUserGeneric>
        </div>
    )
}

export default UserInfo;
