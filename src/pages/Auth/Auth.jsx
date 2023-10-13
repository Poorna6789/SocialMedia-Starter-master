import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth =() => {
    return (
        <div className='Auth'>
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className='Webname'>
                <h1>Poorna's Media</h1>
                <h6>Explore the ideas through the world</h6>
            </div>

        </div>
        <Login/>       
        </div>

    );
};
function Login()
{
    return (
        <div className='a-right'>
            <form className='infoForm authForm'>
                <h3>Log In</h3>
        
        <div>
            <input type="text" placeholder='Username' className='infoInput' name="username"/>

        </div>
        <div>
            <input type="password" className='infoInput' placeholder='Password' name="password"/>

        </div>
        <div>
            <span style={{fontSize:"12px"}}>
            Don't have an account Sign Up
            </span>
            <button className='button infoButton'>Login</button>
        </div>
        
        
            </form>
        
        </div>

    );
};
function SignUp(){
    return (
        <div className='a-right'>
            <form className="infoForm">
                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstname' />
                    <input type="text" placeholder='Last Name' className='infoInput' name='Lastname' />
                    </div>
                <div>

               
                    <input type="text" placeholder='User Name' className='infoInput' name='Username' />
                    

                    </div>
                    <div>
                    <input type="text" placeholder='Password' className='infoInput' name='Password' />
                    <input type="text" placeholder='Confirm Password' className='infoInput' name='Confirm password' />
                   
                   
                    </div>
                    <div>
                        <span  style={{fontSize:'12px' }}>
                           Already have an account. Login!
                        </span>
                    </div>
                    <button className='button infoButton' type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Auth