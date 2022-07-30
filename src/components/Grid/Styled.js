import  styled from "styled-components";

export const Title = styled.h3`
        color:black;
        font-size: 1rem;
        margin-left:5%;
        margin-top:2%;
        border:none;
        border-bottom:1px solid grey;
        border-left:1px solid grey;
        padding: 10px;
        border-right: none;
        border-radius:10px 0px 0px 10px;

`
export const Section = styled.div`
        display:flex;
        flex-direction: row;
        width: 100%;
        background-color: white;
       overflow-x: scroll;
       overflow-y: hidden;
       text-align: left;
       &::-webkit-scrollbar {
      width: 12px;              
    }

    &::-webkit-scrollbar-track {
      background: transparent;        
    }

    &::-webkit-scrollbar-thumb {
      background-color: red;    
      border-radius: 20px;       
      border: 1px solid orange;  
    }
     
`


export const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:4%;
    margin-left:5%;
`
