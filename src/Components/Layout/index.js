import React from 'react'
import * as S from './styled';
import Search from '../Search';


const Layout = ({children}) => {
    return (
        <S.WrapperLayout>
           <Search />
           {children}
        </S.WrapperLayout>
    )
}
export default Layout;

