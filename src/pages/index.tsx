import BasePlan from '../components/BasePlan'
import BaseLayout from '../components/layout/BaseLayout'

const Home = () => {
  return (
    <BaseLayout>
      <div className="header">
        <h2>Hello, Héctor !</h2>
      </div>
      <div className="search">
        <input type="text" placeholder="search something..." />
        <button>search</button>
      </div>
      <div className="promotion">
        <h3>Promotion</h3>
        <div>this is a promo</div>
      </div>
      <div className="plan-section">
        <div>
          <h3>Awesome Plans</h3>
          <a href="#">See all</a>
        </div>
        <div className="plan-quick-filter">
          <span>All plans</span>
          <span>Close to me</span>
          <span>Popular</span>
          <span>Newest</span>
        </div>
        <div className="plan-list">
          <BasePlan
            data-cy="plan"
            description="this is a first plan"
            title="The most awesome plan in the world"
            date={new Date()}
          />
        </div>
      </div>
    </BaseLayout>
  )
}

export default Home
