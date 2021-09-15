import React from 'react';
import * as S from './styled';
import useGitHub from '../../Hooks';

const SubInfo = () =>{
    const {gitState} = useGitHub(); 
    return (
        <S.WrapperStatusCount>
        <div>
          <h4>Followers</h4>
          <span> {gitState.user.followers}</span>
        </div>
        <div>
          <h4>Followings</h4>
          <span> {gitState.user.following}</span>
        </div>
        <div>
          <h4>Gists</h4>
          <span> {gitState.user.public_gists}</span>
        </div>
        <div>
          <h4>Repos</h4>
          <span> {gitState.user.public_repos}</span>
        </div>
            
        </S.WrapperStatusCount>
    )
}

export default SubInfo;
