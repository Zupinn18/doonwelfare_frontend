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
function ItemTab() {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaignId, setSelectedCampaignId] = useState("");
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    amount: "",
  });
  const [uploadedImage, setUploadedImage] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCampaigns();
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      // Make a GET request to fetch items from the API
      const response = await axios.get("https://ngo-node.onrender.com/api/items");
  
      // Check if the request was successful
      if (response.status === 200) {
        // Update the items state with the fetched data
        const data = response.data;
        const updateItems = await Promise.all(
          data.map(async (item) => {
            try {
              const res = await axios.get(
                `https://ngo-node.onrender.com/api/campaigns/${item.campaignId}`
              );
              if (res.status === 200) {
                return {
                  ...item,
                  campaignData: res.data,
                };
              }
            } catch (e) {
              return {
                ...item,
              };
            }
          })
        );
        setItems(updateItems);
      } else {
        console.error("Failed to fetch items:", response.data);
        // Handle error case if needed
      }
    } catch (error) {
      console.error("Error fetching items:", error);
      // Handle error case if needed
    }
  };

  console.log("items are ", items);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemData({
      ...itemData,
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
        // formData.append("upload_preset", "gscxpnyd"); // Replace with your Cloudinary preset
        formData.append("upload_preset", "hlggrx90");
        const response = await axios.post(
          // "https://api.cloudinary.com/v1_1/dfwct3edy/image/upload",
          "https://api.cloudinary.com/v1_1/dpnadazzb/image/upload",
          formData
        );

        const imageUrl = response.data.secure_url;

        setUploadedImage(imageUrl);
        setItemData({
          ...itemData,
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
      // Create an item object with the data to send to the server
      const itemObject = {
        campaignId: selectedCampaignId,
        name: itemData.name,
        description: itemData.description,
        imageUrl: itemData.imageUrl,
        amount: itemData.amount,
      };

      // Make a POST request to the API endpoint to create the item
      const response = await axios.post(
        "https://ngo-node.onrender.com/api/items",
        itemObject
      );

      // Check if the request was successful
      if (response.status === 201) {
        console.log("Item created successfully:", response.data);
        // Reset the form after successful submission
        setItemData({
          name: "",
          description: "",
          imageUrl: "",
        });
        setUploadedImage(null);
        toast.success("Item created successfully", {
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
  const handleDeleteItem = async (itemId) => {
    try {
      const response = await axios.delete(
        `https://ngo-node.onrender.com/api/items/${itemId}`
      );

      // Check if the request was successful
      if (response.status === 204) {
        toast.success("Item deleted successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setItems((prevItems) =>
          prevItems.filter((item) => item._id !== itemId)
        );
      } else {
        console.error("Failed to delete Item:", response.data);
      }
    } catch (error) {
      console.error("Error deleting Item:", error);
    }
  };

  console.log("items data is:", items);

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
        Add Item to Campaign
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
            label="Item Name"
            id="name"
            name="name"
            value={itemData.name}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </div>
        <div className="m-3">
          <TextField
            label="Item Description"
            id="description"
            name="description"
            value={itemData.description}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            required
          />
        </div>
        <div className="m-3">
          <TextField
            label="Item Amount"
            type="number"
            id="amount"
            name="amount"
            value={itemData.amount}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </div>
        <div className="m-3">
          <FormControl fullWidth>
            <InputLabel>Item Image</InputLabel>
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
            Create Item
          </Button>
        </div>
      </form>
      <div>
        <h2>All Items</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Campaign Id</TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Amount</TableCell>
                {/* Add additional headers for other properties */}
                <TableCell>Image</TableCell>
                <TableCell>Delete Item</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item._id}>
                {/* campagin id because campaign data is not populated till now */}
                  {/* <TableCell>{item.campaignId}</TableCell> */}
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.amount}</TableCell>

                  {/* Add additional cells for other properties */}
                  <TableCell>
                    <img src={item.imageUrl} alt={item.name} width="100" />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteItem(item._id)}
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

export default ItemTab;
