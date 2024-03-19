import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Cities from "./views/Cities"
import LayoutMain from "./components/LayoutMain"
import City from "./views/City"
import store from "./redux/store"
import { Provider } from "react-redux"


function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <LayoutMain>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/cities/:id" element={<City />} />
            </Routes>
          </LayoutMain>
        </Provider>
      </BrowserRouter>
      
  )
}

export default App
