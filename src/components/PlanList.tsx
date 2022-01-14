import React from 'react'
import styled from 'styled-components'
import BasePlan from './BasePlan'
import { Plan } from '../types'

interface Props {
  title: string
  plans: Plan[]
}

const Wrapper = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: white;
  color: black;
`

const PlanList: React.FC<Props> = ({ title, plans }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div>
        {plans.map((plan) => (
          <BasePlan
            data-cy="plan-item"
            key={plan.title}
            title={plan.title}
            description={plan.description}
          />
        ))}
      </div>
    </Wrapper>
  )
}

export default PlanList
