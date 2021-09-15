import React, { useEffect, useState } from "react";
import RepositoryItem from "../RepositoryItem";
import useGitHub from "../../Hooks";
import * as S from './styled';

const Repositories = () => {
  const { gitState, getRepos, getStarred } = useGitHub();
  const [hasUserForSearch, setHasUserForSearch] = useState(false);

  useEffect(() => {
    if (gitState.user.login) {
      getRepos(gitState.user.login);
      getStarred(gitState.user.login);
    }
    setHasUserForSearch(gitState.repositories);
  }, [gitState.user.login]);

  return (
    <>
      {hasUserForSearch ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {gitState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {gitState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}

    </>
  );

};
export default Repositories;