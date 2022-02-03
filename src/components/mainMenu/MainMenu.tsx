import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

import { menuListItems } from './settings'

const Wrapper = styled.div`
  position: fixed;
  width: inherit;
  bottom: 0;
  overflow: hidden;
`

const Menu = styled.ul`
  margin: 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  align-items: flex-end;
  background-color: #fff;
  padding: 1em 0.5em;
  justify-content: space-around;
  border-radius: 9px;
  margin: 0.5em;
  @media (min-width: 768px) {
    margin: 1em 2em;
  }
`

const MainMenu: React.FC = () => {
  return (
    <Wrapper>
      <Menu>
        {menuListItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </Menu>
    </Wrapper>
  )
}

export default MainMenu
