import React,{useState,useEffect} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

const ListRead = () => {
    const [data, setData] = useState([])
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://her-business.onrender.com/api/v1/listing/get/one/' + id)
        .then(res => {
             console.log(res.data)
             
            setData(res.data)})
        .catch(err => console.log(err))
    },[])
  return (
    // <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    //     <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
    <div className="listing">
    
	<div
		style={{
			height: 550,
			width: 700,
			borderWidth: 1,
			borderColor: "black",
			backgroundColor: "white",
			boxShadow: "1px 2px 9px 5px #E6E6FA",
			borderRadius: 10,
		}}
	>
		<h3 style={{ textAlign: "center", paddingTop: 30 }}>Detail of User</h3>
		<div style={{ paddingTop: 5, marginLeft: 70 }}>
			<p>Business Name: {data.business_name}</p>
		</div>
		<div style={{ paddingTop: 5, marginLeft: 70 }}>
			<p>Email: {data.business_email}</p>
		</div>
		<div style={{ paddingTop: 5, marginLeft: 70 }}>
			<p>Phone: {data.phone}</p>
		</div>
		<div style={{ paddingTop: 5, marginLeft: 70 }}>
			<p>Industry: {data.industry}</p>
		</div>
		
		<div style={{ paddingTop: 5, marginLeft: 70 }}>
			<p>City: {data.city}</p>
		</div>
		{/* <button style={{border:'none', borderWidth:5, borderRadius:9, backgroundColor:'#E6E6FA', borderColor:'#E6E6FA', marginLeft:100, marginTop:20 }}>Create</button> */}
		<button
			onClick={() => navigate("/listing")}
			style={{
				height: 40,
				border: "none",
				borderWidth: 5,
				borderRadius: 9,
				backgroundColor: "#E6E6FA",
				borderColor: "#E6E6FA",
				marginLeft: 65,
				marginTop: 20,
			}}
		>
			Back
		</button>
		{/* <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
            <Link to="/" className="btn btn-success">Back</Link> */}
	</div>
   
  
	    
</div>
  )
}

export default ListRead;