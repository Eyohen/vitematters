import React,{useState,useEffect} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

const ListCreate = () => {
    const [values, setValues] = useState({
        name:"",
        email:"",
        phone: "", 
        interest: "",
        industry:"", 
        city:"",
    })
    const navigate = useNavigate();
    


    const handleInput = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/users', values)
        .then(res => {
            console.log(res);
            navigate('/listing')
        })
        .catch(err => console.log(err))
    }
  return (
    // <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    //     <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <div  className='listing'>
            <div style={{height:400, width:600, borderWidth:1, borderColor:'black', backgroundColor:'white',  boxShadow: '1px 2px 9px 5px #E6E6FA',borderRadius:10}}>
            <h3 style={{textAlign:'center', paddingTop:30}}>Create a User</h3>
            <form onSubmit={handleInput}>
            <div style={{ paddingTop:5,marginLeft:70}}>
                <label >Business Name:</label>
                <input type='text' name='name' placeholder='Business name' onChange={e => setValues({...values, name:e.target.value})} className='input' />
            </div>
            <div style={{ paddingTop:8,marginLeft:70}}>
                <label>Email:</label>
                <input type='text' name='name' placeholder='Email' onChange={e => setValues({...values, email:e.target.value})} className='input'/>
            </div>
            <div style={{ paddingTop:8,marginLeft:70}}>
                <label>Phone:</label>
                <input type='text' name='name' placeholder='Phone number' onChange={e => setValues({...values, phone:e.target.value})} className='input'/>
            </div>
            <div style={{ paddingTop:8,marginLeft:70}}>
                <label >Industry:</label>             
                <input type='text' name='name' placeholder='Interest' onChange={e => setValues({...values, interest:e.target.value})} className='input'/>
            </div>
            <div style={{ paddingTop:8,marginLeft:70}}>
                <label>Interest:</label>
                <input type='text' name='name' placeholder='Industry' onChange={e => setValues({...values, industry:e.target.value})} className='input'/>
            </div>
            <div style={{ paddingTop:8,marginLeft:70}}>
                <label>City:</label>
                <input type='text' name='name' placeholder='Enter City' onChange={e => setValues({...values, city:e.target.value})} className='input'/>
            </div>
            {/* <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
            <Link to="/" className="btn btn-success">Back</Link> */}
             <button style={{border:'none', borderWidth:5, borderRadius:9, backgroundColor:'#E6E6FA', borderColor:'#E6E6FA', marginLeft:100, marginTop:20 }}>Create</button>
            <button onClick={()=>navigate('/listing')} style={{height: 40, border:'none', borderWidth:5, borderRadius:9, backgroundColor:'#E6E6FA', borderColor:'#E6E6FA', marginLeft:100, marginTop:20 }}>Back</button> 
         </form>

    </div>
    </div>
  )
}

export default ListCreate;