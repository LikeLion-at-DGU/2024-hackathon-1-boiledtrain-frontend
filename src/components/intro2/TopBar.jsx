import React,{useState} from "react";
import * as S from './styled'
import menuImage from '../../assets/images/menu.png'
import Menu from "../Main/Menu"
import StartMenu from "../Main/StartMenu";
import { getToken } from "../../utils/auth";


function TopBar(){
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const token =getToken();

    const toggleMenuButton = () => {
        setSidebarVisible(prev => !prev); 
    };
    const closeSidebar = () => {
        setSidebarVisible(false);
    };
    return(
        <>
            <S.TopBarContainer>
                <S.Img src={menuImage} alt='대체이미지'></S.Img>
                <S.menuButton onClick={toggleMenuButton}><img src={menuImage}></img></S.menuButton>
            </S.TopBarContainer>
            {token ? (
                // 로그인
                isSidebarVisible && <Menu onClose={closeSidebar} />
            ) : (
                // 비로그인
                isSidebarVisible && <StartMenu onClose={closeSidebar}/>
            )}
        </>
    )
}

export default TopBar;