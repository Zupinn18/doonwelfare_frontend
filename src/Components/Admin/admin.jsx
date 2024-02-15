import React, { useState } from "react";
import CampaignTab from "./CampaignTab"; // Create CampaignTab component separately
import ItemsTab from "./ItemTab"; // Create ItemsTab component separately
import DashboardTab from "./DashboardTab"; // Import DashboardTab component separately
import CSR from "./CSRtab"; // Import CSR tab component
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Visitors from "./Visitors";
import BlogsTab from "./BlogsTab";
import RazorpayOrderForm from "./RazorpayOrderForm"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Admin = () => {
  // State to track active tab
  const [value, setValue] = React.useState(0);
  // Function to handle tab selection
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container-fluid" style={{height:"100vh"}}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        color="white"
        gutterBottom
        style={{ fontWeight: "bold",borderRadius: "20px"}}
        className="m-3 p-2 bg-primary"
      >
      Dashboard
      </Typography>

      <Box
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          gap: "50px",
          width: "100%",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, border: "none" }}
        >
          <Tab label="Campaign" {...a11yProps(0)} />
          <Tab label="Add Items" {...a11yProps(1)} />
          <Tab label="Stats" {...a11yProps(2)} />
          <Tab label="CSR" {...a11yProps(3)} />
          <Tab label="Visitors" {...a11yProps(4)} />
          <Tab label="Blogs" {...a11yProps(5)} />
          <Tab label="RazorpayOrderForm" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0} style={{ width: "100%" }}>
          <CampaignTab />
        </TabPanel>
        <TabPanel value={value} index={1} style={{ width: "100%" }}>
          <ItemsTab />
        </TabPanel>
        <TabPanel value={value} index={2} style={{ width: "100%" }}>
        <DashboardTab />
        </TabPanel>
        <TabPanel value={value} index={3} style={{ width: "100%" }}>
        <CSR />
        </TabPanel>
        <TabPanel value={value} index={4} style={{ width: "100%" }}>
        <Visitors/>
        </TabPanel>
        <TabPanel value={value} index={5} style={{ width: "100%" }}>
        <BlogsTab/>
        </TabPanel>
        <TabPanel value={value} index={6} style={{ width: "100%" }}>
        <RazorpayOrderForm/>
        </TabPanel>
      </Box>
    </div>
  );
};

export default Admin;
