import React, { useContext, useState } from 'react'
import './loginpopup.css'
import { assets } from '../../assets/frontend_assets/assets.js'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'


const Loginpopup = ({setShowLogin}) => {

    const { setToken, url,loadCartData } = useContext(StoreContext)
    const [currentState,setCurrentState]=useState('Login')
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (e) => {
        e.preventDefault()

        let new_url = url;
        if (currentState === "Login") {
            new_url += "/api/user/login";
        }
        else {
            new_url += "/api/user/register"
        }

        console.log('Sending request to:', new_url, 'with data:', data);

        const response = await axios.post(new_url, data);

        console.log('Response:', response.data);

        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            loadCartData({token:response.data.token})
            setShowLogin(false)
        }
        else {
            toast.error(response.data.message)
        }
    }

  return (
    <div className='loginpopup'>
        <form onSubmit={onLogin} className='loginPopupContainer' >
            <div className="loginPopupTitle">
                <h2>
                    {currentState}
                </h2>
                <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" />
            </div>
            <div className="loginPopupInput">
                {currentState==="Login"?<></>:<input type="text" name='name' onChange={onChangeHandler} value={data.name}  placeholder='Name' required/>}
                
                <input type='text' placeholder='email' name='email' onChange={onChangeHandler} value={data.email} required/>
                <input type="password" placeholder='password' name='password' value={data.password} onChange={onChangeHandler} required />
                <br />
                <button>
                    {currentState==="Sign up"?"Create Account":"Login"}
                </button>
                <div className="loginPopupCondition">
                    <input type="checkbox" required />
                    <p>
                        i agree to tncs
                    </p>
                </div>
                {currentState==='Login'?<p>
                    create new account? <span onClick={()=>setCurrentState("Sign up")} > click here</span>
                </p>:<p>alred hav acc? <span onClick={()=>setCurrentState("Login")} >login here</span></p>}
                
                
            </div>
        </form>
    </div>
  )
}

export default Loginpopup