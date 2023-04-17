import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PhoneCard from './PhoneCard';

function ShowPhoneList() {
const [phones, setphones] = useState([]);

useEffect(() => {
    axios
        .get('http://localhost:4000/api/products')
        .then((res) => {
            setphones(res.data);
    })
    .catch((err) => {
        console.log('Error from Show Phone List');
    });
}, []);

const phoneList =
phones.length === 0
        ? 'there is no phone record!'
        : phones.map((phone, k) => <PhoneCard phone={phone} key={k} />);

    return (
    <div className='ShowProductList'>
    <div className='container'>
        <div className='row'>
        <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Phones List</h2>
        </div>

        <div className='col-md-11'>
            <Link
                to='/create-product'
                className='btn btn-outline-warning float-right'
            >
                + Add New Product
            </Link>
            <br />
            <br />
            <hr />
        </div>
        </div>

        <div className='list'>{phoneList}</div>
    </div>
    </div>
    );
}

export default ShowPhoneList;
