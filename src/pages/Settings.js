import React from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import TabAccount from "../components/MainLayout/TabAccount";
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import { Box } from "mdi-material-ui";
import { useState } from "react";

import TabInfo from '../components/MainLayout/TabInfo'

import  TabNotifications from "../components/MainLayout/TabNotifications";

import { AccountOutline } from "mdi-material-ui";


const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const Settings = () => {
  // ** State
  const [value, setValue] = useState('account')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return <MainLayout>Settings
   <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='account'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Account</TabName>
              </Box>
            }
          />
    
        </TabList>

        <TabPanel sx={{ p: 0 }} value='account'>
          <TabAccount />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='security'>
        
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='info'>
          <TabInfo />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='billing'>
          
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='notifications'>
          <TabNotifications />
        </TabPanel>
      </TabContext>
    </Card>
  </MainLayout>;
  
};

export default Settings;
