import  styled from "styled-components";
import {Stars} from "@styled-icons/material/Stars"
export const Image = styled.img`
    width:210px;
    height:300px ;
    margin-right:5%;
    cursor: pointer;
    border-radius: 10px;
`

export const Section = styled.div`
    width:100%;
    height:auto ;
    
  
`

export const Namee = styled.h5`
    text-align: center;
    color:black;
`
export const P = styled.p`
    color:black;
`
export const Div = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5%;
`
export const DivScore = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`
export const Score = styled(Stars)`
    height: 15px;
    margin-right: 5%;
`

// export const Score = styled.p`
//         color:red;
//         background-color: black;
//         padding:10px;
//         width:30px;
//         border-radius: 50%;
//         border:3px solid red;
// `