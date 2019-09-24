import React from 'react'
import StyledFooter from './StyledFooter'

const Footer = ({ siteName }) => {
  return (
    <StyledFooter>
      <small>
        &copy; {new Date().getFullYear()} - {siteName}, Inc
      </small>
    </StyledFooter>
  )
}

export default Footer
