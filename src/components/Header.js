import styled from 'styled-components'

const Header = styled.header`

    width: 100vw;
    height: 10vh;
    display: flex;
    margin-bottom: 5vh;
    justify-content: space-between;
    background: black;
    font-size: 2rem;
    color: white;
    flex-direction: column;
   div:first-child{
       background:black;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       margin-top: 3vh;
       
   }
   div:second-child{
       background:black;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       margin-right: 3vh;
       
   }

`

export default Header