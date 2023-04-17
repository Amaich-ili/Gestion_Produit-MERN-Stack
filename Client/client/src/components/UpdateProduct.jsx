import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdatePhoneInfo(props) {
const [phone, setPhone] = useState({
    name: '',
    quantity: 0,
    price: 0,
    version: '',
    chargeur: '',
    image: ''
});

const { id } = useParams();
const navigate = useNavigate();

useEffect(() => {
    axios
        .get(`http://localhost:4000/api/products/${id}`)
        .then((res) => {
        setPhone({
            name: res.data.name,
            quantity: res.data.quantity,
            price: res.data.price,
            version: res.data.version,
            chargeur: res.data.chargeur,
            image: res.data.image,
        });
    })
    .catch((err) => {
        console.log('Error from Update Phone Info');
    });
}, [id]);

const onChange = (e) => {
    setPhone({ ...phone, [e.target.name]: e.target.value });
};

const onSubmit = (e) => {
    e.preventDefault();

    const data = {
        name: phone.name,
        quantity: phone.quantity,
        price: phone.price,
        version: phone.version,
        chargeur: phone.chargeur,
        image: phone.image,
    };

    axios
        .put(`http://localhost:4000/api/products/${id}`, data)
        .then((res) => {
        navigate(`/show-product/${id}`);
    })
        .catch((err) => {
        console.log('Error in Update Phone Info!');
    });
};

    return (
    <div className='UpdateProductInfo'>
        <div className='container'>
            <div className='row'>
            <div className='col-md-8 m-auto'>
                <br />
                <Link to='/' className='btn btn-outline-warning float-left'>
                Show Product List
                </Link>
            </div>
            <div className='col-md-8 m-auto'>
                <h1 className='display-4 text-center'>Edit Product</h1>
                <p className='lead text-center'>Update Product's Info</p>
            </div>
            </div>

            <div className='col-md-8 m-auto'>
            <form noValidate onSubmit={onSubmit}>
                <div className='form-group'>
                <label htmlFor='name'>Name</label>
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
                <label htmlFor='quantity'>Quantity</label>
                <input
                    type='text'
                    placeholder='quantity'
                    name='quantity'
                    className='form-control'
                    value={phone.quantity}
                    onChange={onChange}
                />
                </div>
                <br />

                <div className='form-group'>
                <label htmlFor='price'>Price</label>
                <input
                    type='text'
                    placeholder='Price'
                    name='price'
                    className='form-control'
                    value={phone.price}
                    onChange={onChange}
                />
                </div>
                <br />

                <div className='form-group'>
                <label htmlFor='version'>Version</label>
                <textarea
                    type='text'
                    placeholder='Version this phone'
                    name='version'
                    className='form-control'
                    value={phone.version}
                    onChange={onChange}
                />
                </div>
                <br />

                <div className='form-group'>
                <label htmlFor='chargeur'>Type chargeur</label>
                <input
                    type='text'
                    placeholder='Type chargeur'
                    name='chargeur'
                    className='form-control'
                    value={phone.chargeur}
                    onChange={onChange}
                />
                </div>
                <br />

                <div className='form-group'>
                <label htmlFor='Image'>Image Link</label>
                <input
                        type='text'
                        placeholder='Link of this Book'
                        name='Image'
                        className='form-control'
                        value={phone.image}
                        onChange={onChange}
                    />
                    </div>
                    <br />

                <button
                type='submit'
                className='btn btn-outline-info btn-lg btn-block'
                >
                Update Product
                </button>
            </form>
            </div>
        </div>
        </div>
    );
}

export default UpdatePhoneInfo;
