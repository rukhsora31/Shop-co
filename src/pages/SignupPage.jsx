import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context'

const SignupPage = () => {

    const { login } = useAppContext()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = (e) => {
        e.preventDefault()
        
        if (username) {
            login(username)
            alert(`User ${username} successfully registered`)
        }
    }


    return (
        <>
            <section className="login">
                <div className="container">
                    <h2 className='login-title'>зарегистрировать аккаунт</h2>
                    <form action='' onSubmit={handleSignup}>
                        <input
                            type="text"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}

                        />
                        <input
                            type="text"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                        <button type='submit'>Sign up</button>
                        <Link to={'/login'}>войти в аккаунт если он есть</Link>
                    </form>
                </div>
            </section>
        </>
    )
}

export default SignupPage
