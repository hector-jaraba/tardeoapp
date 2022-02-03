import { useState } from 'react'
import PlanList from '../components/PlanList'
import { Plan } from '../types'

const Home = () => {
  const [plans, setPlans] = useState<Plan[] | undefined>(undefined)
  const handleGetPlans = () => {
    fetch('/api/plans')
      .then((res) => res.json())
      .then(setPlans)
  }
  return (
    <>
      <h2>Plans</h2>
      <div>
        <button onClick={handleGetPlans}>Load Plans</button>
      </div>
      {plans && <PlanList title="new plans" plans={plans} />}
    </>
  )
}

export default Home
