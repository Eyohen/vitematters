import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link,useParams,useNavigate } from 'react-router-dom'
import ListPagination from './ListPagination'
import { CiEdit,CiTrash,CiFileOn } from "react-icons/ci";
import Modal from '@material-ui/core/Modal';

const Listing = () => {
  
    const[data, setData] = useState([])
const [filter, setFilter] = useState('');
   const [userData, setUserData] = useState([]);
   const [searchData, setSearchData] = useState([]);
   const [records, setRecords] = useState(userData);
   const [paginatedData, setPaginatedData] = useState([])
   const [name, setName] = useState('')
   const [interest, setInterest] = useState('')
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
   // const record = .slice(firstIndex, lastIndex);
    const npage  = Math.ceil(records.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

 
    const [coinsData, setCoinsData] = useState([]);
    const [postsPerPage, setPostsPerPage] = useState(3);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const {id} = useParams();

//     useEffect(()=>{
//         //axios.get('https://klick-api.onrender.com/product/')
//        // axios.get('https://fakestoreapi.com/products')
//        axios.get('http://localhost:3000/users/')
//        .then(res => {setData(res.data)})
//        .catch(error => console.error(error))
//    },[])


useEffect(() => {
    const token = localStorage.getItem("access_token");
    axios
        .get("https://her-business.onrender.com/api/v1/listing/get/all", {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        .then((res) => {
            // console.log(res.data.data.business_listings)
            setData(res.data.data.business_listings);
        })
        .catch((error) => console.error(error));
}, []);



    // useEffect(()=>{
    //     const data = [
    //         { name: "Innoson", email:"inno@testing.com", phone: +22328234234, interest: "collaboration", industry:'Automobile', city:'Lagos' },
    //         { name: "Innoson", email:"inno@testing.com", phone: +22328234234, interest: "collaboration", industry:'Automobile', city:'Lagos' },
    //         { name: "Innoson", email:"inno@testing.com", phone: +22328234234, interest: "collaboration", industry:'Automobile', city:'Lagos' },
    //         { name: "Innoson", email:"inno@testing.com", phone: +22328234234, interest: "collaboration", industry:'Automobile', city:'Lagos' },
    //         { name: "Firstbank", email:"first@testing.com", phone: +22328234234, interest: "non-profit", industry:'Banking', city:'Lagos' },
    //         { name: "Panasonic", email:"pan@testing.com", phone: +22328234234, interest: "networking", industry:'Electronics', city:'Lagos' },
    //         { name: "EduTech", email:"edutech@testing.com", phone: +22328234234, interest: "non-profit", industry:'Education', city:'Lagos' },
    //         { name: "FinTech", email:"fintech@testing.com", phone: +22328234234, interest: "networking", industry:'Finance', city:'Lagos' },
    //         { name: "FinTech", email:"fintech@testing.com", phone: +22328234234, interest: "networking", industry:'Finance', city:'Lagos' },
    //         { name: "FinTech", email:"fintech@testing.com", phone: +22328234234, interest: "networking", industry:'Finance', city:'Lagos' },
    //         { name: "FinTech", email:"fintech@testing.com", phone: +22328234234, interest: "networking", industry:'Finance', city:'Lagos' },
    //     ]
       

    //     setUserData(data)
    //     setSearchData(data)
    //     setRecords(data.slice(firstIndex, lastIndex))
    //     setPaginatedData(data)
    
    // },[currentPage])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = records.slice(firstPostIndex, lastPostIndex);



    const Filter = (event) => {
        setRecords(userData
            .filter(f => f.name.toLowerCase().includes(event.target.value))
            )
    }


    // handle filter change
    const handleFilterChange = (event) =>{
        setFilter(event.target.value);
        //setRecords(data.filter(y => y.interest.toLowerCase().includes(event.target.value)))
        setRecords(userData.filter(y => y.interest.includes(filter)))
    }


    
    const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete?");
    if(confirm) {
        axios.delete('http://localhost:3000/users/' + id)
        .then(res => {
            // navigate('/listing');
            location.reload();
        }).catch(err => console.log(err));
    }
}




  return (


<div className="listing">

<table >
    <div  style={{height:55, width:1000, backgroundColor:"white", marginTop:-50,marginLeft:50}}>
    <tr>
        <td >
            {/* <input type='text' placeholder='Enter name...' onChange={(e)=> setName(e.target.value)}/> */}
            <input type='text' class="no-outline"  placeholder='search' onChange={Filter} style={{height:30, border:'none', borderRadius:9, backgroundColor:'#E6E6FA',paddingLeft:10, marginLeft:50 }}/>
        </td>
        <td>
            <select style={{width:150,height:23,border:'none',marginLeft:100}} value={filter} onChange={handleFilterChange} >
                <option value=''>Interests</option>
                <option value='networking'>non-profit</option>
                <option value='collaboration'>networking</option>
                <option value='non-profit'>collaboration</option>
            </select>

          
           
        </td>
        <td>
            <button onClick={()=> handleSearch()}  style={{border:'none', borderWidth:5, borderRadius:9, backgroundColor:'#E6E6FA', borderColor:'#E6E6FA', marginLeft:150 }}>Search</button>
        </td>

        <td>
        <Link to="/listcreate"  style={{height:20, width:90, border:'none', borderWidth:5, borderRadius:9, backgroundColor:'#98FB98',marginLeft:150 }}> ADD +</Link>
        </td>
    </tr>
    </div>
</table>


<table className='table' class="table table-hover table-dark" style={{ marginTop:50,marginLeft:0}}>
    <thead>
    <tr>
        <th style={{marginLeft:30}}>Business Name</th>
        <th >Email</th>
        <th >Phone</th>
        <th >Interest</th>
        <th >Industry</th>
        <th >City</th>
        <th >Actions</th>
    </tr>
    </thead>
    <tbody >
    {data.map((val, key) => {
        return (
            <tr key={val.id}>
                <td  className='td' >{val.business_name}</td>
                <td  className='td'>{val.business_email}</td>
                <td  className='td'>{val.phone}</td>
                <td  className='td'>{val.interests[0]}</td>
                <td  className='td'>{val.industry}</td>
                <td  className='td'>{val.city}</td>
                <td>
                                {/* <Link to={`/admin/listread/${val.id}`} className=''><CiFileOn/></Link> */}
                                <Link to={`/listread/${val.id}`} className=''><CiFileOn/></Link>
                               
           
                                    <Link to={`/listedit/${val.id}`}><CiEdit/></Link>
                                    <button onClick={e => handleDelete(val.id)}><CiTrash color='red'/></button>
                                </td>
            </tr>
        )
    })}
    </tbody>
</table>
<ListPagination
totalPosts={records.length}
postsPerPage={postsPerPage}
setCurrentPage={setCurrentPage}
currentPage={currentPage}
/>
{/* <nav>

    <ul className='pagination'>
        <li className='page-item'>
            <a href='#' className='page-link' onClick={prePage}>Prev</a>
        </li>
        {
            numbers.map((n,i) => (
                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                    <a href='#' className='page-link'
                    onClick={() => changePage(n)}
                    >{n}</a>

                </li>
            ))
        }
         <li className='page-item'>
            <a href='#' className='page-link' onClick={nextPage}>Next</a>
        </li>
    </ul>
</nav> */}
</div>
);



// function prePage(){
//     if(currentPage !== firstIndex){
//         setCurrentPage(currentPage - 1)
//     }
// }

// function changePage(id){
//     setCurrentPage(id)
// }

// function nextPage(){
//     if(currentPage !== lastIndex){
//         setCurrentPage(currentPage + 1)
//     }
// }



}


export default Listing