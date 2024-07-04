import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='rlogin'>
            <div className='rcard'>
                <div className='rleft'>
                    <h1> Social App </h1>
                    <p>j;fhuehnqehf eqihni4hgi iuw fhiuw wifhwehf iuwhfkjh fuiwb jhwbf jwbfk </p>
                    <span>Do you have an Account</span>
                    <Link to="/login"><button>Login</button></Link>

                </div>
                <div className='rright'>
                    <h1>Register</h1>
                    <form>
                        <input type='text' placeholder='username' />
                        <input type='email' placeholder='email' />
                        <input type='password' placeholder='password' />
                        <input type='text' placeholder='Name' />
                        <Link to="/"><button>Register</button></Link>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register

