import React from "react";
import * as S from './styled'

const Select= ({selected,selected2,onSelect2})=>{
    return(
        <>
            <S.SelectContainer>
                {selected===1 ? 
                <>
                <S.SelectButton 
                onClick={()=>onSelect2(1)}
                style={{color : selected2===1 ? '#00ABFC':'#AFAFAF', marginLeft:'291px'}}
                >• 인기순</S.SelectButton>
                <S.SelectButton
                onClick={()=>onSelect2(2)}
                style={{color : selected2===2 ? '#00ABFC':'#AFAFAF'}}
                >• 최신순</S.SelectButton>
                </>
                :
                <></>}
            </S.SelectContainer>
        </>
    )
}

export default Select;