import React,{useState,useEffect} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

const ListEdit = () => {
    const [values, setValues] = useState({
        name:"",
        email:"",
        phone: "", 
        interest: "",
        industry:"", 
        city:"",
    })
    // const [data, setData] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();
    


    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
        .then(res => {
            //  console.log(res.data)
            setValues(res.data)
             
            setData(res.data)})
        .catch(err => console.log(err))
    },[])


        const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/users/'+ id, values)
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
            <h3 style={{textAlign:'center', paddingTop:30}}>Edit a User</h3>
            <form onSubmit={handleUpdate} >
            <div style={{ paddingTop:5,marginLeft:70}}>
                <label >Business Name:</label>
                <input type='text' name='name' placeholder='Business name' value={values.name} onChange={e => setValues({...values, name:e.target.value})} className='input' />
            </div>
            <div style={{ paddingTop:8,marginLeft:70}}>
                <label>Email:</label>
                <input type='text' name='name' placeholder='Email'  value={values.email} onChange={e => setValues({...values, email:e.target.value})} className='input'/>
            </div>
            <div style={{ paddingTop:8,marginLeft:70}}>
                <label>Phone:</label>
                <input type='text' name='name' placeholder='Phone number'  value={values.phone} onChange={e => setValues({...values, phone:e.target.value})} className='input'/>
            </div>
            <div style={{ paddingTop:8,marginLeft:70}}>
                <label >Industry:</label>             
                <input type='text' name='name' placeholder='Interest'  value={values.industry} onChange={e => setValues({...values, interest:e.target.value})} className='input'/>
            </div>
            <div style={{ paddingTop:8,marginLeft:70}}>
                <label>Interest:</label>
                <input type='text' name='name' placeholder='Industry'  value={values.interest} onChange={e => setValues({...values, industry:e.target.value})} className='input'/>
            </div>
            <div style={{ paddingTop:8,marginLeft:70}}>
                <label>City:</label>
                <input type='text' name='name' placeholder='Enter City'  value={values.city} onChange={e => setValues({...values, city:e.target.value})} className='input'/>
            </div>
            {/* <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
            <Link to="/" className="btn btn-success">Back</Link> */}
             <button style={{border:'none', borderWidth:5, borderRadius:9, backgroundColor:'#E6E6FA', borderColor:'#E6E6FA', marginLeft:100, marginTop:20 }}>Edit</button>
            <button onClick={()=>navigate('/listing')} style={{height: 40, border:'none', borderWidth:5, borderRadius:9, backgroundColor:'#E6E6FA', borderColor:'#E6E6FA', marginLeft:100, marginTop:20 }}>Back</button> 
         </form>

    </div>
    </div>
  )
}

export default ListEdit;