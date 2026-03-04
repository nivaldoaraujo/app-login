import { Link } from "react-router-dom"


function Login() {
  

  return (
    <>
    <h1>login</h1>
    <Link to={"/cadastro"} >Cadastro</Link>
    </>
  )
}

export default Login