import { useEffect,useState } from 'react';
import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Footer/footer';
const AllBlog = () => {

    useEffect(() => {
        fetchBlogs();
    });

    const [blogs,setBlogs] = useState([]);

    const fetchBlogs =()=>{
        axios.get('https://ngo-node.onrender.com/api/blogs').then((res) => {
            setBlogs(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
      <>
      <div style={{position: 'relative', textAlign: 'center', color: 'white'}}>
          <img src="https://sabrangindia.in//sites/default/files/gau_mata.jpg" alt="Cow blogs" style={{width:"100%",height:"350px",objectFit:"cover"}}/>
          <h1 style={{position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)',color:"black"}}>Blogs</h1>
      </div>
  
      <div className="row justify-content-center" style={{padding:"50px"}}>
    {
      blogs.map((blog) => {
        return (
          <div className="col-sm-4">
            <div className="border p-2 bg-light mb-5" style={{borderRadius:"12px"}}>
              <div className="card-body">
                <img src={blog.imageUrl} />
                <h5 className="card-title mt-3 font-bold">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <Link to={`/blogs/${blog._id}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        )
      })
    }
  </div>
      <Footer/>
      </>
  )
}

export default AllBlog;