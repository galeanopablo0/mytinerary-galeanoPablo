import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Cities from "./views/Cities"
import LayoutMain from "./components/LayoutMain"
import City from "./views/City"
import Register from "./views/Register"
import Login from "./views/Login"
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from "react"
import authQueries from "./services/authQueries"
import alerts from "./utils/alerts"
import { login } from "./redux/actions/userAction"
import WithUser from "./guard/WithUser"

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    authQueries.loginWithToken().then((res) => {
      if (res.status === 200) {
        dispatch(login(res.data))
        alerts.success("¡Bienvenido " + res.data.first_name + "!" )
      }
    })
  }, [])

  return (
      <BrowserRouter>
          <LayoutMain>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/cities/:id" element={<City />} />
              <Route element={<WithUser />}>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
              </Route>
            </Routes>
          </LayoutMain>
          <ToastContainer />
      </BrowserRouter>  
  ) 
}

export default App
