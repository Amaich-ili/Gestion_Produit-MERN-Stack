
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowPhoneDetails(props) {
const [phone, setPhone] = useState({});

const { id } = useParams();
const navigate = useNavigate();

useEffect(() => {
    axios
        .get(`http://localhost:4000/api/products/${id}`)
        .then((res) => {setPhone(res.data);
    })
    .catch((err) => {
        console.log('Error from ShowBookDetails');
    });
}, [id]);

const onDeleteClick = (id) => {
    axios
        .delete(`http://localhost:4000/api/products/${id}`)
        .then((res) => {navigate('/');
    })
    .catch((err) => {
        console.log('Error form Show Phone Details_deleteClick');
    });
};

const PhoneItem = (
    <div>
        <table className='table table-hover table-dark'>
        <tbody>
        <tr>
            <th scope='row'></th>
            <td>Name</td>
            <td>{phone.name}</td>
        </tr>
        <tr>
            <th scope='row'></th>
            <td>Quantity</td>
            <td>{phone.quantity}</td>
        </tr>
        <tr>
            <th scope='row'></th>
            <td>Price</td>
            <td>{phone.price}</td>
        </tr>
        <tr>
            <th scope='row'></th>
            <td>Phone Version </td>
            <td>{phone.version}</td>
        </tr>
        <tr>
            <th scope='row'></th>
            <td>Charger Type</td>
            <td>{phone.chargeur}</td>
        </tr>
        </tbody>
        </table>
    </div>
);

    return (
    <div className='ShowProductDetails'>
        <div className='container'>
        <div className='row'>
            <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
                Show Product List
            </Link>
        </div>
        <br />
        <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Product's Record</h1>
            <p className='lead text-center'>View Product's Info</p>
            <hr /> <br />
        </div>
        <div className='col-md-10 m-auto'>{PhoneItem}</div>
        <div className='col-md-6 m-auto'>
            <button
                type='button'
                className='btn btn-outline-danger btn-lg btn-block'
                onClick={() => {
                onDeleteClick(phone._id);
            }}
            >
                Delete Product
            </button>
        </div>
        <div className='col-md-6 m-auto'>
            <Link
                to={`/edit-product/${phone._id}`}
                className='btn btn-outline-info btn-lg btn-block'
            >
                Edit Product
            </Link>
        </div>
        </div>
    </div>
    </div>
    );
}

export default ShowPhoneDetails;
