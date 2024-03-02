import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function BlogsTab() {
  const initialCampaignData = {
    title: "",
    content: "",
    imageUrl: "",
  };

  const [campaignData, setCampaignData] = useState(initialCampaignData);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [editcampaignId, setEditCampaignId] = useState(null);

  useEffect(() => {
    // Fetch campaigns data when the component mounts
    fetchCampaigns();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampaignData({
      ...campaignData,
      [name]: value,
    });
  };

  const handleImageUpload = async (files) => {
    const file = files[0];

    if (file) {
      try {
        // Upload the image to Cloudinary (you need to replace with your Cloudinary API URL and preset)
        const formData = new FormData();
        formData.append("file", file);
        // formData.append("upload_preset", "gscxpnyd"); // Replace with your Cloudinary preset
        formData.append("upload_preset", "hlggrx90");
        const response = await axios.post(
          // "https://api.cloudinary.com/v1_1/dfwct3edy/image/upload",
          "https://api.cloudinary.com/v1_1/dpnadazzb/image/upload",
          formData
        );

        const imageUrl = response.data.secure_url;

        setUploadedImage(imageUrl);
        setCampaignData({
          ...campaignData,
          imageUrl,
        });
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a campaign object with the data to send to the server
      const campaignObject = {
        title: campaignData.title,
        content: campaignData.content,
        imageUrl: campaignData.imageUrl,
      };

      // Make a POST request to the API endpoint to create the campaign
      const response = await axios.post(
        "https://ngo-node.onrender.com/api/blogs",
        campaignObject
      );

      // Check if the request was successful
      if (response.status === 201) {
        console.log("Blog created successfully:", response.data);
        // Show a success Toastify notification
        toast.success("Blog created successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(()=>{
          window.location.reload();
        },2000)
      } else {
        console.error("Failed to create blog:", response.data);
        // Handle error case if needed
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      // Handle error case if needed
    }
  };

  const fetchCampaigns = async () => {
    try {
      // Make a GET request to fetch campaigns from the API
      const response = await axios.get("https://ngo-node.onrender.com/api/blogs");
      console.log(response);
      // Check if the request was successful
      if (response.status === 200) {
        // Update the campaigns state with the fetched data

        setCampaigns(response.data);
      } else {
        console.error("Failed to fetch blogs:", response.data);
        // Handle error case if needed
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      // Handle error case if needed
    }
  };

  const handleDeleteCampaign = async (campaignId) => {
    try {
      // Make an HTTP DELETE request to delete the campaign by 9ID

    
      const response = await axios.delete(
        `https://ngo-node.onrender.com/api/blogs/${campaignId}`
      );
      console.log(response)
      // Check if the request was successful
      if (response.status === 204) {
        console.log("Blog deleted successfully");
        // Show a success Toastify notification
        toast.success("Blog deleted successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });

        // Update the campaigns state to remove the deleted campaign
        setCampaigns((prevCampaigns) =>
          prevCampaigns.filter((campaign) => campaign._id !== campaignId)
        );
      } else {
        console.error("Failed to delete blog:", response.data);
        // Handle error case if needed
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      // Handle error case if needed
    }
  };

  const handleEditCampaign = async (campaignId) => {
    try {
      // Make an HTTP GET request to fetch the campaign by ID
      const response = await axios.get(
        `https://ngo-node.onrender.com/api/blogs/${campaignId}`
      );
      setEditCampaignId(campaignId)
      // Check if the request was successful
      if (response.status === 200) {
        // Update the campaign state with the fetched campaign
        setCampaignData(response.data);
        console.log(response.data);
      } else {
        console.error("Failed to fetch blog:", response.data);
        // Handle error case if needed
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
      // Handle error case if needed
    }
  }
  const editBlog = async (campaignId) => {
   
    try {
      // Make a PUT request to update the campaign
      const response = await axios.patch(
        `https://ngo-node.onrender.com/api/blogs/${editcampaignId}`,
        campaignData
      );

      // Check if the request was successful
      if (response.status === 200) {
        console.log("Blog updated successfully:", response.data);
        // Show a success Toastify notification
        toast.success("Blog updated successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(()=>{
          window.location.reload();
        },2000)
      } else {
        console.error("Failed to update blog:", response.data);
        // Handle error case if needed
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      // Handle error case if needed
    }
  }

  const openBlogPage = (campaignId) => {
    window.open(`/blogs/${campaignId}`, "_blank");
  }

  return (
    <div
      style={{
        marginTop: "-20px",
        padding: "20px",
        border: "2px solid black",
      }}
    >
      <h2
        className="text-center mb-4"
        style={{
          fontWeight: "bold",
        }}
      >
        Create Blog
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <TextField
            label="Blog Title"
            id="name"
            name="title"
            value={campaignData.title}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </div>
        <div className="mb-3">
          <ReactQuill
            theme="snow"
            value={campaignData.content}
            onChange={(value) =>
              setCampaignData({
                ...campaignData,
                content: value,
              })
            }
          />
        </div>
        <div>
          <FormControl fullWidth>
            <InputLabel>Blog Image</InputLabel>
            <Dropzone onDrop={handleImageUpload} accept="image/*">
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className={`dropzone ${uploadedImage ? "uploaded" : ""}`}
                  style={{
                    border: "1px dashed #ccc",
                    padding: "20px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <input {...getInputProps()} />
                  {uploadedImage ? (
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="uploaded-image"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  ) : (
                    <>
                      <CloudUploadIcon fontSize="large" />
                      <p>Drag & drop or click to upload an image</p>
                    </>
                  )}
                </div>
              )}
            </Dropzone>
          </FormControl>
        </div>
          
        <div className="m-3">
          <Button type="submit" variant="contained" color="primary" fullWidth>
          Create Blog
          </Button>
        </div>
        <div className="m-3">
          <Button onClick={()=>{editBlog();}} variant="contained" color="primary" fullWidth>
          Edit Blog
          </Button>
        </div>
      </form>

      <div>
        <h2 className="fw-bold"> All Blogs</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campaigns.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.content}</TableCell>
                  
                  
                  {/* Add additional cells for other properties */}
                  <TableCell>
                    <img src={item.imageUrl} alt={item.name} width="100" />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => openBlogPage(item._id)}
                    >
                      Open
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleEditCampaign(item._id)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteCampaign(item._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <ToastContainer />
    </div>
  );
}

export default BlogsTab;
