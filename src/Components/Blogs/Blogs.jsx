import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/Navbar';

const Blogs = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBlogs();
  }, []);

  useEffect(() => {
    if (id && blogs.length > 0) {
      setCurrentBlogById(id);
    }
  }, [id, blogs]);

  const getAllBlogs = async () => {
    try {
      const response = await axios.get('https://ngo-node.onrender.com/api/blogs');
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setLoading(false);
    }
  };

  const setCurrentBlogById = (blogId) => {
    const blog = blogs.find((blog) => blog._id === blogId);
    if (blog) {
      setCurrentBlog(blog);
    } else {
      setCurrentBlog(null);
    }
  };

  const handleBlogClick = (blogId) => {
    setCurrentBlogById(blogId);
  };

  // Function to strip HTML tags
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <>
    <Navbar/>
    <div className="container" style={{paddingTop:"150px"}}>
      <div className="row">
        <div className="col-md-10">
          {!loading && currentBlog ? (
            <div>
              <h2 style={{fontWeight:"bold"}}>{currentBlog.title}</h2>
              <img src={currentBlog.imageUrl} alt="Blog" className="img-fluid mb-3" style={{ height: '300px' }} />
              <div dangerouslySetInnerHTML={{ __html: currentBlog.content }} />
              {/* <p>{stripHtmlTags(currentBlog.content)}</p> */}
            </div>
          ) : (
            <p>{loading ? 'Loading...' : 'No blog selected'}</p>
          )}
        </div>
        <div className="col-md-2">
          <h3  style={{fontWeight:"bold"}}>All Blogs</h3>
          <div className="list-group text-center">
            {blogs.map((blog) => (
              <button
                key={blog._id}
                className={`list-group-item list-group-item-action ${
                  currentBlog && currentBlog._id === blog._id ? 'active' : ''
                }`}
                onClick={() => handleBlogClick(blog._id)}
              >
                <img src={blog.imageUrl} alt="" style={{ height: '100px' }} />
                {blog.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Blogs;
