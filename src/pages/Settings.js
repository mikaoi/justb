import React from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import TabAccount from "../components/MainLayout/TabAccount";
import Card from "@mui/material/Card";

import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { styled } from "@mui/material/styles";

import { useState } from "react";

const TabName = styled("span")(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: "0.875rem",
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Settings = () => {
  // ** State
  const [value, setValue] = useState("account");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainLayout>
      Settings
      <Card>
        <TabContext value={value}>
          <TabPanel sx={{ p: 0 }} value="account">
            <TabAccount />
          </TabPanel>
        </TabContext>
      </Card>
    </MainLayout>
  );
};

export default Settings;
