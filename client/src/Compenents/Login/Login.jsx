import React, {useState, useEffect} from 'react'
import '../../App.css'
import Axios  from 'axios'

import video from '../../Assets/fish-animation.mp4'
import logo from '../../Assets/logo.png'
import { FaUser } from "react-icons/fa"
import { BsShieldLockFill } from "react-icons/bs"
import { Link, useNavigate} from 'react-router-dom'



const Login = () => {
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [loginStatus, setLoginStatus] = useState('')
    const [statusHolder, setStatusHolder] = useState('message')
    const navigateTo = useNavigate()

    const loginUser = (e) =>{
        e.preventDefault();

        if (!loginUsername || !loginPassword ) {
            setLoginStatus('Please fill in all the fields');
            return;
          }

        Axios.post('http://localhost:3002/login', {
            LoginUsername: loginUsername,
            LoginPassword: loginPassword,
        }).then((response)=>{
            console.log(response.data.message)

            if(response.data.message){
                navigateTo('/')
                setLoginStatus('Wrong Credentials!')
            }
            else{
                navigateTo('/dashboard')
            }

        })
    }

    useEffect(() =>{
        if(loginStatus !== ''){
            setStatusHolder('showMessage')
            setTimeout(() =>{
                setStatusHolder('message')
                setLoginStatus('')
            }, 4000);
        }
    }, [loginStatus])

    
  return (
    <div className='login flex'>
        <div className="container flex">
            <div className="leftBox">
                <video src={video} autoPlay loop muted></video>

                <div className="textMid">
                    <h2>Make your aquatic dreams come true!</h2>
                    <p> Your therapeutic pet is just a fin away.</p>
                </div>
            </div>

            <div className="rightBox">

                <div className="header">
                    <img src={logo} alt='logo'/>
                    <h2 className="logoName">DeepBelow</h2>
                    <p>Welcome Back!</p>
                </div>
               
               <form action="" className='form grid'>

                    <span className={statusHolder}>{loginStatus}</span>
                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUser className='icon'/>
                            <input type="text" id='username' placeholder='Enter Username' onChange={(event)=>{
                              setLoginUsername(event.target.value)
                            }}  />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="username">Password</label>
                        <div className="input flex">
                            <BsShieldLockFill className='icon'/>
                            <input type="password" id='username' placeholder='Enter Password' onChange={(event)=>{
                              setLoginPassword(event.target.value)
                            }}  />
                        </div>
                        <p>Forgot your password? <a href="#">Click Here</a></p>
                    </div>

                    <div className="buttonDiv">
                            <button onClick={loginUser}>Login</button>
                    </div>

               </form>

               <div className="signup">
                    <h2>Don't have an account? <a href="/register">Sign Up</a> </h2>
               </div>

            </div>
        </div>
        
    </div>
  )
}

export default Login
