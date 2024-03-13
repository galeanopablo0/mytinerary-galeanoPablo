import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Cities from "./views/Cities"
import LayoutMain from "./components/LayoutMain"
import City from "./views/City"

function App() {
  return (
      <BrowserRouter>
        <LayoutMain>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/cities/:id" element={<City />} />

            <Route path="/whatsapp" Component={() => {
              window.location.replace('https://whatsapp.com')
            }}/>
            <Route path="/facebook" Component={() => {
              window.location.replace('https://facebook.com')
            }}/>
            <Route path="/instagram" Component={() => {
              window.location.replace('https://instagram.com')
            }}/>
            <Route path="/twitter" Component={() => {
              window.location.replace('https://twitter.com')
            }}/>
            <Route path="/gmail" Component={() => {
              window.location.replace('https://gmail.com')
            }}/>
          </Routes>
        </LayoutMain>
      </BrowserRouter>
      
  )
}

export default App
