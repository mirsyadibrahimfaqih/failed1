import React from 'react'
import styled from 'styled-components'

const Container = (props) => {
    const { children } = props
  return (
  <ContainerStyles>
      <div className="Container">
      {children}
    </div>
  </ContainerStyles>
  )
}

const ContainerStyles = styled.div`
.Container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}
`

export default Container
