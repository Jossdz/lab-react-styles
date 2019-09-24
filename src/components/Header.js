import styled from 'styled-components'


const Header = styled.header`
  position: fixed;
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #282c34;
  nav{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
  a{
   color: white;
   padding: 20px;
   font-size: 1rem;
  }

`

export default Header;