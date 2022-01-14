import { FC } from 'react'
import styled from 'styled-components'
import MainMenu from '../mainMenu/MainMenu'

const Wrapper = styled.main`
  overflow: auto;
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1024px) {
    width: 1024px;
  }
`

const BaseLayout: FC = ({ children }) => {
  return (
    <Wrapper>
      <MainMenu />
      {children}
    </Wrapper>
  )
}

export default BaseLayout
