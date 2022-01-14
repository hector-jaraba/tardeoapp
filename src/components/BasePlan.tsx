import React from 'react'
import styled from 'styled-components'
import { Plan } from '../types'

interface Props extends Plan {
  'data-cy': string
}

const Wrapper = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 0.5rem 0rem;
  width: 100%;
  background: white;
  color: black;
  border: 2px solid black;
`

const planDate = (date?: Date) =>
  date ? <p>{date.toLocaleString()}</p> : undefined

const BasePlan: React.FC<Props> = ({ title, description, date, ...props }) => {
  return (
    <Wrapper data-cy={props['data-cy']}>
      <h1>{title}</h1>
      <p>{description}</p>
      {planDate(date)}
    </Wrapper>
  )
}

export default BasePlan
