import styled from 'styled-components'
import {User} from "@styled-icons/boxicons-regular/User"
import {NotificationsCircle} from '@styled-icons/ionicons-outline/NotificationsCircle'
import {Search} from "@styled-icons/boxicons-regular/Search"

export const Account = styled(User)`
  width:25px;
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
    width:25px
`
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color:#748a93;
    font-size: 1rem;
    margin-top: 1%;

    ul{
        cursor: pointer;
        display: flex;
        justify-content: space-around;
        gap: 20px;
       
        margin-right: 2%;
        li:hover{
            color: grey;
        }
        li::marker {
            color: transparent;
        }
        
    }
`