// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './contact.css';

const Contact = ({data}) => {
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <img className='img' src={data.photo} alt={data.name}/>

                    <div className='content'>
                    <h3>{data.name}</h3>
                    <p>{data.name}</p>
                    <p>{data.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;