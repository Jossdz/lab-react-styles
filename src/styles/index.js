import styled from 'styled-components'

export const Nav = styled.nav`
background: rgb(32,34,41);
color: white;
width:100vw;
height: ${props => 
props.type === 'nav' ? 10 :
props.type === 'footer' ? 20 : 
5 }vh;
display: flex;
justify-content: space-between;
a{
    color: white;
    text-decoration: none;
}
ul{
    padding-top:2vh;
    list-style-type: none;
    display:flex;
    justify-content:flex-end;
    
}
li{
    margin-right: 3rem;
}
.img{
    margin:0;
    padding:0;
    display: flex;
    align-items: center;
}
`
export const Hero = styled.div`
    background: lightgray;
    border: 1px solid gray;
    width: 95vw;
    height: 40vh;
    margin-left: 2.5vw;
    margin-top: 4vh;
    margin-bottom: 4vh;
    border-radius: 5px;
    h1{
        color: #05a19c;
    }
`

export const Button = styled.button`
width: 200px;
height: 50px;
background: rgb(128,216,247) ;
border-radius: 5px;
border: 2px solid lightgray;
color: black;
font-size: 1.5rem;
margin: 0 1em;
padding: 0.25em 1em;
`
export const Card = styled.div`
    background: gray;
    border-radius: 2px;
    height: 200px;
    margin: 3rem;
    width: 500px;
    display: inline-flex;
    flex-direction: row;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    justify-content: space-around;
    `
    