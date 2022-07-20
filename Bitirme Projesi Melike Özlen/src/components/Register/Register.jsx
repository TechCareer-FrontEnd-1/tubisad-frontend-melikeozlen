import React, { useState } from 'react'
import './Register.scss'
const Register = ({ visiblity, setVisiblity }) => {
    const [Email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Email === "" || password === "" || username === "" || Email == null || password == null || username == null) {
            alert("Boş alan bırakmayınız")
        }
        else {
            localStorage.setItem('username', JSON.stringify(username));
            localStorage.setItem('email', JSON.stringify(Email));
            localStorage.setItem('password', JSON.stringify(password));
            alert("Başarılı Bir Şekilde Kayıt Oldunuz")
            setEmail();
            setPassword();
            setUsername();
            setVisiblity(false)
        }
        
    }

    if (visiblity === true) {
        return (
            <div id='Login' className='Login mx-auto' >
                <div className="exid">
                    <button className='btn btn-danger' onClick={() => setVisiblity(false)}>X</button>
                </div>
                <h6 className='mx-auto text-dark'>REGISTER</h6>
                <form action="">
                    <input className='input' type="email" placeholder='Email Adress' value={Email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='btn btn-primary' type='password' onClick={(e) => handleSubmit(e)} >CREATE</button>
                </form>
            </div>
        )
    } else return null;

}

export default Register