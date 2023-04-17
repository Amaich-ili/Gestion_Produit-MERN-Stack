import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateProduct = (props) => {
    // Define the state with useState hook
    const navigate = useNavigate();
    const [phone, setphone] = useState({
        name: '',
        quantity: 0,
        price: 0,
        version: '',
        chargeur: '',
        image: ''
    });

    const onChange = (e) => {
        setphone({ ...phone, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        axios
        .post('http://localhost:4000/api/products', phone)
        .then((res) => {
            setphone({
                name: '',
                quantity: 0,
                price: 0,
                version: '',
                chargeur: '',
                image: ''
            });

            // Push to /
            navigate('/');
        })
        .catch((err) => {
            console.log('Error in Create Product!');
        });
    };

    return (
        <div className='CreateProduct'>
        <div className='container'>
            <div className='row'>
            <div className='col-md-8 m-auto'>
                <br />
                <Link to='/' className='btn btn-outline-warning float-left'>
                Show Product List
                </Link>
            </div>
            <div className='col-md-8 m-auto'>
                <h1 className='display-4 text-center'>Add Product</h1>
                <p className='lead text-center'>Create new Product</p>

                <form noValidate onSubmit={onSubmit}>
                <div className='form-group'>
                    <input
                    type='text'
                    placeholder='Name of the Product'
                    name='name'
                    className='form-control'
                    value={phone.name}
                    onChange={onChange}
                    />
                </div>
                <br />

                <div className='form-group'>
                    <input
                    type='text'
                    placeholder='quantity'
                    name='quantity'
                    className='form-control'
                    value={phone.quantity}
                    onChange={onChange}
                    />
                </div>

                <div className='form-group'>
                    <input
                    type='text'
                    placeholder='Price'
                    name='price'
                    className='form-control'
                    value={phone.price}
                    onChange={onChange}
                    />
                </div>

                <div className='form-group'>
                    <input
                    type='text'
                    placeholder='Version this phone'
                    name='version'
                    className='form-control'
                    value={phone.version}
                    onChange={onChange}
                    />
                </div>

                <div className='form-group'>
                    <input
                    type='text'
                    placeholder='Type chargeur'
                    name='chargeur'
                    className='form-control'
                    value={phone.chargeur}
                    onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input
                    type='text'
                    placeholder='Link to the image'
                    name='image'
                    className='form-control'
                    value={phone.image}
                    onChange={onChange}
                    />
                </div>

                <input
                    type='submit'
                    className='btn btn-outline-warning btn-block mt-4'
                />
                </form>
            </div>
            </div>
        </div>
        </div>
    );
};

export default CreateProduct;
