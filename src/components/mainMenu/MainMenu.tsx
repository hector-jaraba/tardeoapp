import React from 'react'
import styled from 'styled-components'
import { Plan } from '../../types'
import { menuListItems } from './settings'

const Wrapper = styled.div`
  position: absolute;
`

const MainMenu: React.FC = ({ ...props }) => {
  return (
    <Wrapper>
      {menuListItems.map((item) => (
        <h1>{item.icon}</h1>
      ))}
    </Wrapper>
  )
}

export default MainMenu
