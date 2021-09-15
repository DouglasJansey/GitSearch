import React, { useState } from "react";
import * as S from './styled';
import useGitHub from "../../Hooks";

const Search = () => {
  const { getUser } = useGitHub();
  const [userForSearch, setUserForSearch] = useState(undefined);

  const submitUser = () => {
    if (!userForSearch) return;
    return getUser(userForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <input type="text"
          placeholder="Digite o Username"
          onChange={(e) => setUserForSearch(e.target.value)} />
        {console.log()}
        <button type="submit" onClick={submitUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  )

}


export default Search
