import styled from 'styled-components'

const StyledDescription = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem 1.5rem;
  max-width: 800px;
  margin: 5rem auto;
  @media (min-width: 992px) {
    grid-gap: 4rem;
  }
`

export default StyledDescription
