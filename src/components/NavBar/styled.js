import styled from 'styled-components'
import {User} from "@styled-icons/boxicons-regular/User"
import {NotificationsCircle} from '@styled-icons/ionicons-outline/NotificationsCircle'
import {Search} from "@styled-icons/boxicons-regular/Search"

export const Account = styled(User)`
  width:25px;
  `
export const H2 = styled.h2`
    font-family: 'Mochiy Pop One', sans-serif;
    margin-left: 2%;
`
export const Meet = styled(Search) `
    width:25px;
    margin-right: 10px;
    `
export const Li = styled.input`
    border: none;
    background: transparent;
    border-bottom: 1px solid black;
    outline: 0;
@media(max-width: 640px) {
    display:none
  }
  
`
export const Notify = styled(NotificationsCircle) `
    width:25px;
`
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color:white;
    font-size: 1rem;
    position: absolute;
    padding-top:1%;
    padding-bottom:1%;
    top:0%;
    background-color: rgba(0, 0, 0, 0.1);
    ul{
        cursor: pointer;
        display: flex;
        justify-content: space-around;
        gap: 20px;
        @media(max-width: 830px) {
            display:none;
        }
        
      
       
        margin-right: 2%;
        li:hover{
            color: grey;
        }
        li::marker {
            color: transparent;
        }
        
    }
`
export const DECO = styled.li`
   border: none;
    color:white;
    outline: none;
    text-decoration: none !important;
`