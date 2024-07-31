import React,{useState} from "react";
import * as S from './styled'
import menuImage from '../../assets/images/menu.png'
import Menu from "../Main/Menu"


function TopBar(){
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleMenuButton = () => {
        setSidebarVisible(prev => !prev); 
    };
    return(
        <>
            <S.TopBarContainer>
                <S.Img src={menuImage} alt='대체이미지'></S.Img>
                <S.menuButton onClick={toggleMenuButton}><img src={menuImage}></img></S.menuButton>
            </S.TopBarContainer>
            {isSidebarVisible && <Menu />}
        </>
    )
}

export default TopBar;