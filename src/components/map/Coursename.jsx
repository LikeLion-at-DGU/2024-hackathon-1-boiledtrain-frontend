import React,{useState} from "react";
import { Describ,Bold, Lockcontainer, LockButton,Courseguide, Courseinput, PlaceAddButton } from "./styled";
import Lock from "../../assets/images/Lock.svg";
import unLock from "../../assets/images/unLock.png";

const Coursename=()=>{
    const [isLock,setIsLock]=useState(true);

    const Locked=()=>{
        setIsLock(prevState=>!prevState);
    }
    return(
        <>  
            <Lockcontainer>
                <LockButton onClick={Locked}><img src={isLock ? Lock:unLock}/></LockButton>
            </Lockcontainer>
            <Courseguide>
                <Bold>코스 이름<Describ>나만의 이름을 붙여주세요. (10자 이내)</Describ></Bold>
                <Courseinput/>
            </Courseguide>
            <Courseguide>
                <Bold>한줄 소개<Describ>코스에서의 기억, 좋았던 점 등을 작성해봐요. (20자 이내)</Describ></Bold>
                <Courseinput/>
            </Courseguide>
            <PlaceAddButton>등록하기</PlaceAddButton>
        </>
    )

}

export default Coursename;