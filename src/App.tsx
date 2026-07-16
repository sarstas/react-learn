import './App.scss'
import { Footer } from './components/core/Footer/Footer'
import { Header } from './components/core/Header/Header'
import { RestaurantsPage } from "./components/RestaurantModule/RestaurantsPage/RestaurantsPage";
import { ScrollProgressDemo } from "./components/core/ScrollProgress/ScrollProgressDemo";

function App() {
  return (
        <div className="app">
            <Header />
            <main className="app__content">
                 <RestaurantsPage />
                {/*<ScrollProgressDemo />*/}
            </main>
            <Footer />
        </div>
  )
}

export default App
