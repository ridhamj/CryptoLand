import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input, Typography } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Title } = Typography;

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
    
      {!simplified && (
        <>
        <Title level={2} className="heading">Cryptocurrencies</Title>
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
        </div>
        </>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link key={currency.id} to={`/crypto/${currency.id}`}>
              <Card title={`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} />} hoverable style={{borderBottom: 'solid #344CB7 5px', borderRadius: '5%'}}>
                <p><span style={{color: '#707070'}}>Price: </span> ${millify(currency.price)}  </p>
                <p><span style={{color: '#707070'}}>Market Cap: </span>{millify(currency.marketCap)}</p>
                <p><span style={{color: '#707070'}}>Daily Change: </span> <span style={{color: millify(currency.change) < 0.0001 ? '#F90716' : '#6ECB63' }}> {currency.change}% {(currency.change) > 0.0001 ? <CaretUpOutlined /> : <CaretDownOutlined /> }</span> </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;