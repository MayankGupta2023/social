import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const Login = () => {

    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        login();
    }


    return (
        <div className='login'>
            <div className='card'>
                <div className='left'>
                    <h1> Hello World </h1>
                    <p>j;fhuehnqehf eqihni4hgi iuw fhiuw wifhwehf iuwhfkjh fuiwb jhwbf jwbfk </p>
                    <span>Dont you have an Account</span>
                    <Link to="/register"><button>Register</button></Link>

                </div>
                <div className='right'>
                    <h1>Login</h1>
                    <form>
                        <input type='text' placeholder='username' />
                        <input type='password' placeholder='password' />
                        <Link to="/"><button onClick={handleLogin}>Login</button></Link>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login
