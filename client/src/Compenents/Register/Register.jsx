import React, {useState, useEffect} from 'react'
import '../../App.css'
import Axios  from 'axios'

import video from '../../Assets/fish-animation.mp4'
import logo from '../../Assets/logo.png'
import { FaUser } from "react-icons/fa"
import { BsShieldLockFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md";
import { Link, useNavigate} from 'react-router-dom'



const Register = () => {
    const [email, setUserEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [signinStatus, setSigninStatus] = useState('')
    const [statusHolder, setStatusHolder] = useState('message')
    const navigateTo = useNavigate()

    const createUser = () =>{

        if (!username || !password ) {
            setSigninStatus('Please fill in all the fields');
            return;
          }

        Axios.post('http://localhost:3002/register', {
            Email: email,
            Username: username,
            Password: password,
            
        }).then(()=>{
                setSigninStatus('Wrong Credentials!')
        })
    }

    useEffect(() =>{
        if(signinStatus !== ''){
            setStatusHolder('showMessage')
            setTimeout(() =>{
                setStatusHolder('message')
                setSigninStatus('')
            }, 4000);
        }
    }, [signinStatus])

    
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
                    <p>Start Your Journey Now!</p>
                </div>
               
               <form action="" className='form grid'>

                    <span className={statusHolder}>{signinStatus}</span>

                    <div className="inputDiv">
                        <label htmlFor="username">Email</label>
                        <div className="input flex">
                            <MdEmail className='icon'/>
                            <input type="text" id='email' placeholder='Enter Email' onChange={(event)=>{
                              setUserEmail(event.target.value)
                            }}  />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUser className='icon'/>
                            <input type="text" id='username' placeholder='Enter Username' onChange={(event)=>{
                              setUsername(event.target.value)
                            }}  />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="username">Password</label>
                        <div className="input flex">
                            <BsShieldLockFill className='icon'/>
                            <input type="password" id='username' placeholder='Enter Password' onChange={(event)=>{
                              setPassword(event.target.value)
                            }}  />
                        </div> 
                    </div>

                    <div className="buttonDiv">
                            <button onClick={createUser}>Register</button>
                    </div>

               </form>

               <div className="signup">
                    <h2>Already have an account? <a href="/">Log in</a> </h2>
               </div>

            </div>
        </div>
        
    </div>
  )
}

export default Register
