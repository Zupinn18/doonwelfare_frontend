import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
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

function CampaignTab() {
  const initialCampaignData = {
    title: "",
    description: "",
    imageUrl: "",
    amount: "",
    requirement:"",
  };

  const [campaignData, setCampaignData] = useState(initialCampaignData);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  
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
        // Upload the image to Cloudinary (replace with your Cloudinary API URL and preset)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "lu1omcoz");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/djvo45ald/image/upload",
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


  const handleMoveCampaign = async (index, direction) => {
    // Create a copy of the current campaigns array
    const updatedCampaigns = [...campaigns];
  
    // Determine the new index after moving the campaign
    const newIndex = direction === 'up' ? index - 1 : index + 1;
  
    // Swap the positions of the campaigns
    [updatedCampaigns[index], updatedCampaigns[newIndex]] = [updatedCampaigns[newIndex], updatedCampaigns[index]];
  
    // Extract the campaign IDs in the updated order
    const updatedCampaignIds = updatedCampaigns.map(campaign => campaign._id);
  
    try {
      // Make a PUT request to update the order of campaigns on the server
      await axios.put("https://ngo-node.onrender.com/api/campaigns", {
        campaignIds: updatedCampaignIds
      });
  
      // Update the local state with the new order
      setCampaigns(updatedCampaigns);
  
      // Show a success Toastify notification
      toast.success("Campaigns updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error updating campaigns:", error);
      // Handle error case if needed
      toast.error("Failed to update campaigns", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Create a campaign object with the data to send to the server
      const campaignObject = {
        title: campaignData.title,
        description: campaignData.description,
        imageUrl: campaignData.imageUrl,
        amount: campaignData.amount,
        requirement: campaignData.requirement,
        progress: campaignData.progress,
        outOf: campaignData.outOf,
      };
  
      // Make a POST request to the API endpoint to create/update the campaign
      const response = await axios.post(
        "https://ngo-node.onrender.com/api/campaigns",
        campaignObject
      );
  
      // Check if the request was successful
      if (response.status === 201) {
        console.log("Campaign created successfully:", response.data);
        // Show a success Toastify notification
        toast.success("Campaign created successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.error("Failed to create campaign:", response.data);
        // Handle error case if needed
      }
    } catch (error) {
      console.error("Error creating campaign:", error);
      // Handle error case if needed
    }
  };
  

  const fetchCampaigns = async () => {
    try {
      const response = await axios.get("https://ngo-node.onrender.com/api/campaigns");
      if (response.status === 200) {
        setCampaigns(response.data);
      } else {
        console.error("Failed to fetch campaigns:", response.data);
      }
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  };

  const handleDeleteCampaign = async (campaignId) => {
    try {
      // Make an HTTP DELETE request to delete the campaign by ID
      const response = await axios.delete(
        `https://ngo-node.onrender.com/api/campaigns/${campaignId}`
      );

      // Check if the request was successful
      if (response.status === 204) {
        console.log("Campaign deleted successfully");
        // Show a success Toastify notification
        toast.success("Campaign deleted successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });

        // Update the campaigns state to remove the deleted campaign
        setCampaigns((prevCampaigns) =>
          prevCampaigns.filter((campaign) => campaign._id !== campaignId)
        );
      } else {
        console.error("Failed to delete campaign:", response.data);
        // Handle error case if needed
      }
    } catch (error) {
      console.error("Error deleting campaign:", error);
      // Handle error case if needed
    }
  };

  const handleSaveUpdate = async () => {
    try {
      // Extract campaign IDs in the updated order
      const updatedCampaignIds = campaigns.map(campaign => campaign._id);
  
      // Make a PUT request to update the order of campaigns on the server
      await axios.put("https://ngo-node.onrender.com/api/campaigns", {
        campaignIds: updatedCampaignIds
      });
  
      // Show a success Toastify notification
      toast.success("Campaigns updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error updating campaigns:", error);
      // Handle error case if needed
      toast.error("Failed to update campaigns", {
        position: toast.POSITION.TOP_RIGHT,
      });
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
        Create Campaign
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <TextField
            label="Campaign Title"
            id="name"
            name="title"
            value={campaignData.title}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </div>
        <div className="mb-3">
          <TextField
            id="outlined-multiline-static"
            label="Campaign Description"
            multiline
            value={campaignData.description}
            onChange={handleInputChange}
            name="description"
            rows={4}
            fullWidth
            required
          />
        </div>
        <div className="mb-3">
          <TextField
            label="Amount"
            id="amount"
            name="amount"
            value={campaignData.amount}
            onChange={handleInputChange}
            fullWidth
            type="number"
            required
          />
        </div>
        <div className="mb-3">
          <TextField
            id="outlined-multiline-static"
            label="requirement"
            multiline
            value={campaignData.requirement}
            onChange={handleInputChange}
            name="requirement"
            rows={4}
            fullWidth
            required
          />
        </div>
        <div className="mb-3">
        <TextField
          label="Progress"
          id="progress"
          name="progress"
          value={campaignData.progress}
          onChange={handleInputChange}
          fullWidth
          type="number"
          required
        />
      </div>
      <div className="mb-3">
        <TextField
          label="Out of"
          id="outOf"
          name="outOf"
          value={campaignData.outOf}
          onChange={handleInputChange}
          fullWidth
          type="number"
          required
        />
      </div>
        <div>
          <FormControl fullWidth>
            <InputLabel>Campaign Image</InputLabel>
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
            Create Campaign
          </Button>
        </div>
      </form>

      <div>
        <h2 className="fw-bold"> All Campaigns</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Action</TableCell>
                <TableCell>requirement</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campaigns.map((item, index) => (
                <TableRow key={item._id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.requirement}</TableCell>
                  <TableCell>
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.name} width="100" />
                    ) : (
                      "No Image"
                    )}
                  </TableCell>
                  <TableCell>
                    {/* Delete button */}
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteCampaign(item._id)}
                    >
                      Delete
                    </Button>
                    {/* Buttons to move campaign */}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleMoveCampaign(index, 'up')}
                      disabled={index === 0} // Disable if already at the top
                    >
                      Move Up
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleMoveCampaign(index, 'down')}
                      disabled={index === campaigns.length - 1} // Disable if already at the bottom
                    >
                      Move Down
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <ToastContainer />
      {/* Button to save campaign updates */}
      <Button variant="contained" color="primary" onClick={handleSaveUpdate}>
        Save Update
      </Button>
    </div>
  );
}

export default CampaignTab;
