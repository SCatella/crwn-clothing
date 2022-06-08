import { Outlet } from "react-router-dom";

const SignIn = () => {
  return (
   <div>
      <div>
        <h1>sign in</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default SignIn;