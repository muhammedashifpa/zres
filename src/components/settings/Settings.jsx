import React from 'react'
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Tabs from '../utils/tabs/Tabs'
import Company from './components/company/Company';
import Counter from './components/counter/Counter';
import SettingsMaker from './components/settingsMaker/SettingsMaker';
import SettingsManager from './components/settingsManager/SettingsManager';
import Terminal from './components/terminal/Terminal';

const Settings = () => {
  return (
    <div className='bg-secondary bg-opacity-25 p-3'>
      <Tabs data={TabData} />
      <BodyWrapper className=''>
        <Routes>
          <Route path='settings-manager' element={<SettingsManager/>}/>
          <Route path='settings-marker' element={<SettingsMaker/>}/>
          <Route path='company' element={<Company/>}/>
          <Route path='terminal' element={<Terminal/>}/>
          <Route path='counter' element={<Counter/>}/>
        </Routes>
      </BodyWrapper>
    </div>
  )
}

export default Settings;


const TabData = [
  {
    key:1,
    path:'settings-manager',
    name:'Settings Manager'
  },
  {
    key:2,
    path:'settings-marker',
    name:'Settings Marker'
  },
  {
    key:3,
    path:'company',
    name:'Company'
  },
  {
    key:4,
    path:'terminal',
    name:'Terminal'
  },
  {
    key:5,
    path:'counter',
    name:'Counter'
  },
];

const BodyWrapper = styled.div`
  
`

