import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreen';
import SideBar from './SideBar';
// import BackButton from "../../../features/BackButton"
// import Button from "../../../features/Button"
import InstructionsScreen02 from './auth/InstructionsScreen02';
import ChangePasswordScreen from './auth/ChangePasswordScreen';
// import Background from '../../features/Background';

const Drawer = createDrawerNavigator();
const UserPanelTab = () => {
  return (
  //  <Background>
  
 <Drawer.Navigator drawerContent={props => <SideBar {...props} />} screenOptions={{ headerStyle: { backgroundColor: '#FFFFFF' }}}>
      <Drawer.Screen name="COSMIC HEIST" component={DashboardScreen} />
      <Drawer.Screen name="Instructions" component={InstructionsScreen02} />
      <Drawer.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ headerTitle: 'Change Password' }} />
    </Drawer.Navigator>
    // </Background>    
  )
}

export default UserPanelTab