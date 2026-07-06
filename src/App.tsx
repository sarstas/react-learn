import './App.css'
import { RestaurantsPage } from './components/RestoranModule/RestaurantsPage/RestaurantsPage'
import type { IRestaurant } from './interface/restaurant.interface'

function App({restaurants}: { restaurants: IRestaurant[] }) {

  return (
        <RestaurantsPage restaurants={restaurants}/>
  )
}

export default App
