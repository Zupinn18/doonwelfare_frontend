import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
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

const campaignData = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaignId, setSelectedCampaignId] = useState("");
  const [itemData, setItemData] = useState({
    description1: "",
    description2: "",
    description3: "",
  });
  const [uploadedImage1, setUploadedImage1] = useState(null);
  const [uploadedImage2, setUploadedImage2] = useState(null);
  const [uploadedImage3, setUploadedImage3] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCampaigns();
    fetchCampaignDatas();
  }, []);

//   const fetchItems = async () => {
//     try {
//       // Make a GET request to fetch items from the API
//       const response = await axios.get("https://ngo-node.onrender.com/api/items");
  
//       // Check if the request was successful
//       if (response.status === 200) {
//         // Update the items state with the fetched data
//         const data = response.data;
//         const updateItems = await Promise.all(
//           data.map(async (item) => {
//             try {
//               const res = await axios.get(
//                 `https://ngo-node.onrender.com/api/campaigns/${item.campaignId}`
//               );
//               if (res.status === 200) {
//                 return {
//                   ...item,
//                   campaignData: res.data,
//                 };
//               }
//             } catch (e) {
//               return {
//                 ...item,
//               };
//             }
//           })
//         );
//         setItems(updateItems);
//       } else {
//         console.error("Failed to fetch items:", response.data);
//         // Handle error case if needed
//       }
//     } catch (error) {
//       console.error("Error fetching items:", error);
//       // Handle error case if needed
//     }
//   };

  const fetchCampaigns = async () => {
    try {
      // Make a GET request to fetch campaigns from the API
      const response = await axios.get("https://ngo-node.onrender.com/api/campaigns");

      // Check if the request was successful
      if (response.status === 200) {
        // Update the campaigns state with the fetched data
        setCampaigns(response.data);
      } else {
        console.error("Failed to fetch campaigns:", response.data);
        // Handle error case if needed
      }
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      // Handle error case if needed
    }
  };

  const fetchCampaignDatas = async() =>{
    try {
      // Make a GET request to fetch Data from the API

      const response = await axios.get("https://ngo-node.onrender.com/api/campaign_data");

      // const response = await axios.get("https://ngo-node.onrender.com/api/get-all-data");


      // Check if the request was successful
      if (response.status === 200) {
        // Update the campaigns state with the fetched data
        setItems(response.data.data);
      } else {
        console.error("Failed to fetch campaigns:", response.data);
        // Handle error case if needed
      }
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      // Handle error case if needed
    }
  }

  const handleInputChange = (e) => {
    setItemData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
    }))
  };

  const handleImageUpload1 = async (files) => {
    const file = files[0];

    if (file) {
      try {
        // Upload the image to Cloudinary (replace with your Cloudinary API URL and preset)
        const formData = new FormData();
        formData.append("file", file);
        // formData.append("upload_preset", "gscxpnyd"); // Replace with your Cloudinary preset
        formData.append("upload_preset", "hlggrx90");
        const response = await axios.post(
          // "https://api.cloudinary.com/v1_1/dfwct3edy/image/upload",
          "https://api.cloudinary.com/v1_1/dpnadazzb/image/upload",
          formData
        );

        const imageUrl1 = response.data.secure_url;
       
        setUploadedImage1(imageUrl1);
        setItemData({
            ...itemData,
            imageUrl1
        });
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
  };
  const handleImageUpload2 = async (files) => {
    const file = files[0];

    if (file) {
      try {
        // Upload the image to Cloudinary (replace with your Cloudinary API URL and preset)
        const formData = new FormData();
        formData.append("file", file);
        // formData.append("upload_preset", "gscxpnyd"); // Replace with your Cloudinary preset
        formData.append("upload_preset", "hlggrx90");
        const response = await axios.post(
          // "https://api.cloudinary.com/v1_1/dfwct3edy/image/upload",
          "https://api.cloudinary.com/v1_1/dpnadazzb/image/upload",
          formData
        );

        const imageUrl2 = response.data.secure_url;
        setUploadedImage2(imageUrl2);
        setItemData({
            ...itemData,
            imageUrl2
        });
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
  };
  const handleImageUpload3 = async (files) => {
    const file = files[0];

    if (file) {
      try {
        // Upload the image to Cloudinary (replace with your Cloudinary API URL and preset)
        const formData = new FormData();
        formData.append("file", file);
        // formData.append("upload_preset", "gscxpnyd"); // Replace with your Cloudinary preset
        formData.append("upload_preset", "hlggrx90");
        const response = await axios.post(
          // "https://api.cloudinary.com/v1_1/dfwct3edy/image/upload",
          "https://api.cloudinary.com/v1_1/dpnadazzb/image/upload",
          formData
        );


        const imageUrl3 = response.data.secure_url;

        setUploadedImage3(imageUrl3);
        setItemData({
            ...itemData,
            imageUrl3
        });
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
  };

  const handleUpdateData = async (itemId) => {
    try {
      if (!uploadedImage1 || !uploadedImage2 || !uploadedImage3 || !itemData.description1 || !itemData.description2 || !itemData.description3) {
        toast.warning("All fields are mandatory, TRY AGAIN", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
  
      const updateDataObject = {
        imageUrl1: uploadedImage1,
        imageUrl2: uploadedImage2,
        imageUrl3: uploadedImage3,
        description1: itemData.description1,
        description2: itemData.description2,
        description3: itemData.description3,
        campaignId: selectedCampaignId,
      };
  
      const response = await axios.put(
        `https://ngo-node.onrender.com/api/campaign_data/${itemId}`,
        updateDataObject
      );
  
      // Check if the request was successful
      if (response.status === 200) {
        toast.success("Campaign Data Updated successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
  
        // Update the item in the state with the new data
        setItems((prevItems) =>
          prevItems.map((item) =>
            item._id === itemId ? { ...item, ...updateDataObject } : item
          )
        );
      } else {
        console.error("Failed to Update Campaign Data :", response.data);
      }
    } catch (error) {
      console.error("Error updating Item:", error);
    }
  };
  
  
  
  
  const handleDeleteData = async (Id) => {
    try {
      const response = await axios.delete(
        `https://ngo-node.onrender.com/api/campaign_data/${Id}`
      );
  
      // Check if the request was successful
      if (response.status === 200) {
        toast.success("Campaign Data Deleted successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // Remove the deleted item from the local state
        setItems((prevItems) => prevItems.filter((item) => item._id !== Id));
      } else {
        console.error("Failed to delete Campaign Data :", response.data);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

    //create an data object 
    const dataObject = {
        imageUrl1: uploadedImage1,
        imageUrl2: uploadedImage2,
        imageUrl3: uploadedImage3,
        description1: itemData.description1,
        description2: itemData.description2,
        description3: itemData.description3,
        campaignId: selectedCampaignId,
    };

    // make a post request to API to create Campaign Data
    const response = await axios.post(

            "https://ngo-node.onrender.com/api/campaign_data",

            dataObject
          );

      // Check if the request was successful
      if (response.status === 201) {
        console.log("Data created successfully:", response.data);
        // Reset the form after successful submission
        setItemData({
          description1:"",
          description2:"",
          description3:"",
          imageUrl1:"",
          imageUrl2:"",
          imageUrl3:""
        });
        setUploadedImage1(null);
        setUploadedImage2(null);
        setUploadedImage3(null);
        toast.success("Campaign Data created successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        console.error("Failed to create item:", response.data);
        // Handle error case if needed
      }
    } catch (error) {
      console.error("Error creating item:", error);
      // Handle error case if needed
    }
  };

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
        Add Campaign Images and Description
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="m-3">
          <FormControl fullWidth>
            <InputLabel>Select a campaign</InputLabel>
            <Select
              name="campaign"
              onChange={(e) => {
                setSelectedCampaignId(e.target.value);
              }}
              value={selectedCampaignId}
              label="Campaign"
              required
            >
              <MenuItem value="">
                <em>Select a campaign</em>
              </MenuItem>
              {campaigns.map((campaign) => (
                <MenuItem key={campaign._id} value={campaign._id}>
                  {campaign.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="m-3">
          <TextField
            label="Campaign Paragraph Description 1"
            id="description1"
            name="description1"
            value={itemData.description1}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            required
          />
        </div>
        <div className="m-3">
          <TextField
            label="Campaign Paragraph Description 2"
            id="description2"
            name="description2"
            value={itemData.description2}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            required
          />
        </div>
        <div className="m-3">
          <TextField
            label="Campaign Paragraph Description 3"
            id="description3"
            name="description3"
            value={itemData.description3}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            required
          />
        </div>
      
        <div className="m-3">
          <FormControl fullWidth>
            <InputLabel>Item Image 1</InputLabel>
            <Dropzone onDrop={handleImageUpload1} accept="image/*">
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className={`dropzone ${uploadedImage1 ? "uploaded" : ""}`}
                  style={{
                    border: "1px dashed #ccc",
                    padding: "20px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <input {...getInputProps()} />
                  {uploadedImage1 ? (
                    <img
                      src={uploadedImage1}
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
          <FormControl fullWidth>
            <InputLabel>Item Image 2</InputLabel>
            <Dropzone onDrop={handleImageUpload2} accept="image/*">
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className={`dropzone ${uploadedImage2 ? "uploaded" : ""}`}
                  style={{
                    border: "1px dashed #ccc",
                    padding: "20px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <input {...getInputProps()} />
                  {uploadedImage2 ? (
                    <img
                      src={uploadedImage2}
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
          <FormControl fullWidth>
            <InputLabel>Item Image 3</InputLabel>
            <Dropzone onDrop={handleImageUpload3} accept="image/*">
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className={`dropzone ${uploadedImage3 ? "uploaded" : ""}`}
                  style={{
                    border: "1px dashed #ccc",
                    padding: "20px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <input {...getInputProps()} />
                  {uploadedImage3 ? (
                    <img
                      src={uploadedImage3}
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
            Add Data
          </Button>
        </div>
      </form>
      <div>
        <h2>All Campaign Data</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Campaign Name</TableCell>
                <TableCell>Image 1 </TableCell>
                <TableCell>Image 2</TableCell>
                <TableCell>Image 3</TableCell>
                {/* Add additional headers for other properties */}
                <TableCell>Description 1</TableCell>
                <TableCell>Description 2</TableCell>
                <TableCell>description 3</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {items.map((item) => (
                <TableRow key={item._id}>
                  {/* <TableCell>{item.campaignData.title}</TableCell> */}
                  <TableCell>{item?.campaignId?.title}</TableCell>
                  <TableCell>
                    <img src={item.imageUrl1} alt="Image 1" loading="lazy" />
                  </TableCell>
                  <TableCell>
                    <img src={item.imageUrl2} alt="Image 1" loading="lazy" />
                  </TableCell>
                  <TableCell>
                    <img src={item.imageUrl3} alt="Image 1" loading="lazy" />
                  </TableCell>
                  <TableCell>{item.description1}</TableCell>
                  <TableCell>{item.description2}</TableCell>
                  <TableCell>{item.description3}</TableCell>
                  {/* Add additional cells for other properties */}
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      style={{
                        backgroundColor:"green",
                      }}
                      onClick={() => handleUpdateData(item._id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      style={{
                        marginTop:"5px",
                        backgroundColor:"red",
                      }}
                      onClick={() => handleDeleteData(item._id)}
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
  )
}

export default campaignData