import styled from 'styled-components'

const StyledCard = styled.article`
  background-image: url(${props => (props.bg ? props.bg : 'https://source.unsplash.com/t-QcBHt4z5w/400x900')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 400px;
  color: #fff;
  position: relative;
  border-radius: 0.5rem;
  :after {
    content: '';
    border-radius: 0.5rem;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
  }
  .content {
    z-index: 2;
    p {
      font-size: 1.125rem;
      width: 80%;
      margin: 0 auto 2rem auto;
    }
  }
`

export default StyledCard
