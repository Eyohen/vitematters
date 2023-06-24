import React,{useState,useEffect} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
import { Space } from "antd";
import SideMenu from '../Components/SideMenu';
import MainRoutes from '../Navigation/MainRoutes';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [loading , setLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const navigate = useNavigate();
        

    const handleInput = (e) => {
        e.preventDefault();
        axios.post('https://her-business.onrender.com/api/v1/auth/login', {
            email,
            password,
        })
        .then((response) => {
            console.log(response.data.data.access_token);
            if (response.data.status === 'success'){
                setIsLoggedIn(true);
               
                localStorage.setItem('access_token', response.data.data.access_token)
               
            } else {
                // Display error message
                alert("invalid email or password")
            }
           
           
        })
        .catch(err => console.log(err))
        // setEmail('');
        // setPassword('');
    }


  return (
    <div>
{isLoggedIn ? (
    <div className="App">
    <Space className="sideandmenu">
       <SideMenu></SideMenu>
   <MainRoutes />
     </Space>
    </div>

 ) : (<div  className='login'>
 <div style={{height:400, width:600, borderWidth:1, borderColor:'black', backgroundColor:'white',  boxShadow: '1px 2px 9px 5px #E6E6FA',borderRadius:10}}>
 <h3 style={{textAlign:'center', paddingTop:30}}>Login</h3>
 <form onSubmit={handleInput}>
 <div style={{ paddingTop:5,marginLeft:70}}>
     <label >Email:</label>
     <input type='text' name='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} className='input2' />
 </div>
 <div style={{ paddingTop:8,marginLeft:70}}>
     <label>Password:</label>
     <input type='password' name='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} className='input2'/>
 </div>

  <button type='submit' style={{border:'none', borderWidth:5, borderRadius:9, backgroundColor:'#E6E6FA', borderColor:'#E6E6FA', marginLeft:65, marginTop:50 }}>{(loading ? 'Loading .....' : 'Login')}</button>
 {/* <button onClick={()=>navigate('/listing')} style={{height: 40, border:'none', borderWidth:5, borderRadius:9, backgroundColor:'#E6E6FA', borderColor:'#E6E6FA', marginLeft:100, marginTop:20 }}>Back</button>  */}
</form>

</div>
</div>)}

</div>

  )
}

export default Login;