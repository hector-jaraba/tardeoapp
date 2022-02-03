import React from 'react'
import BaseIcon from '../BaseIcon/BaseIcon'
import styled from 'styled-components'
import NavLink from './NavLink'

interface ItemMenu {
  id: string
  label: string
  icon: string
  route: string
}

interface Props {
  item: ItemMenu
}

const StyledLi = styled.li`
  list-style: none;
  margin: 0;
  a {
    display: flex;
    flex-direction: column;
    &.active {
      color: ${(props) => props.theme.color};
    }
    span {
      margin-top: 0.5em;
      font-size: 12px;
    }
  }
`

const MenuItem: React.FC<Props> = ({ item }) => {
  return (
    <StyledLi>
      <NavLink href={item.route}>
        <BaseIcon icon={item.icon} />
        <span> {item.label}</span>
      </NavLink>
    </StyledLi>
  )
}

export default MenuItem
