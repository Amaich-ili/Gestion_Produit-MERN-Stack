import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const PhoneCard = (props) => {
    const phone = props.phone;

    return (
        <div className='card-container'>
        <img
            src={phone.image}  //'https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
            alt='Phones'
            height={200}
        />
        <div className='desc'>
            <h2>
            <Link to={`/show-product/${phone._id}`}>{phone.name}</Link>
            </h2>
            <h3>Quantity : {phone.quantity}</h3>
            <p>Price {phone.price} $</p>
        </div>
        </div>
    );
};

export default PhoneCard ;