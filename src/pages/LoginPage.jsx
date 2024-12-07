import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context'

const LoginPage = () => {

    const { login, user } = useAppContext()
    const [username, setUsername] = useState('')

    console.log(user);

    const handleSignup = (e) => {
        e.preventDefault()

        if (username) {
            login(username)
            alert(`welcome back, $(username)`)
            setUsername('')
        }
    }

    return (
        <>
            <section className="login">
                <div className="container">
                    <h2 className='login-title'> войти в аккаунт</h2>
                    <form action='' onSubmit={handleSignup}>
                        <input
                            type="text"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input type="text" placeholder='Password' />
                        <button type='submit'>login</button>
                        <Link to={'/signup'}>зарегистрироваться</Link>
                    </form>
                </div>
            </section>
        </>
    )
}

export default LoginPage
