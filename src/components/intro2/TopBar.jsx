import React from "react";
import * as S from './styled'
import menuImage from '../../assets/images/menu.png'


function TopBar(){
    return(
        <S.TopBarContainer>
            <S.Img src={menuImage} alt='대체이미지'></S.Img>
            <S.menuButton><img src={menuImage}></img></S.menuButton>
        </S.TopBarContainer>
    )
}

export default TopBar;