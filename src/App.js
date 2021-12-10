import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>

      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />} >
              </Route>
 
              <Route exact path='/exchanges' element={<Exchanges />}>
              </Route>

              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />}>
              </Route>

              <Route exact path='/crypto/:coinId' element={<CryptoDetails />}>
              </Route>

              <Route exact path='/news' element={<News />}>
              </Route>
            </Routes>
          </div>
        </Layout>

        <div className='footer'>
        <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
          CryptoLand by RJ <br />
          {/* All rights reserved. */}
        </Typography.Title>

        <Space>
          <Link to='/' style={{color: '#BBE1FA'}}>Home</Link>
          <Link to='/exchanges' style={{color: '#BBE1FA'}}>Exchanges</Link>
          <Link to='/news' style={{color: '#BBE1FA'}}>News</Link>
        </Space>
        </div>


      </div>
      
    </div>
  )
}

export default App
