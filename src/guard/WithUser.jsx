import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const WithUser = (props) => {
    const user = useSelector((store) => store.user.user)
  return user ? <Navigate to={"/"} /> : <Outlet />
}

export default WithUser;