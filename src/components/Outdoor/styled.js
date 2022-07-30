import styled from 'styled-components'

export const Poster = styled.img`
    width:100%;
    height: auto;
    opacity:100%;
    top:0;
`
export const Section = styled.div`
    position: absolute;
    top:80%;
    left:30%;
    transform: translate(-50%,-50%);
    z-index: 99;
    text-align: left;
    border-left: 2px solid white;
    width:auto;
    padding-left: 2%;
    @media(max-width: 1144px) {
            display:none;
    }
   
   
    `
    export const Title = styled.h1`
    font-family: 'Cormorant SC', serif;
    color: white;
    font-weight: bold;
    width: 500px;
  
  `
export const SubTitle = styled.p`
    font-family: 'Cormorant SC', serif;
    overflow-y: scroll; background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;
    color:white;
    width:500px;
    height: 70px;
    overflow-y: scroll;
    font-size: 1.2rem;
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

export const Button = styled.button`
  font-family: 'Cormorant SC', serif;
  cursor:pointer;
  border:none;
  outline: 0;
  margin-top: 5%  ;
  padding:10px 90px;
  background: red;
  color: white;
  &:hover{
    background: grey;
    transition-duration:0.5s ;

  }
`
