import React, { useEffect, useState } from 'react';

import emailjs from 'emailjs-com';
import apiKeys from "../apiKeys";

function Contact() {
   
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('Request a Quote for a Project');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    // console.log(email)
    // console.log(name)
    // console.log(message)
    
    

    //axios function
    // const sync = async () => {
    //     await axios.get('/retrieve/conversation')
    //     .then((res) => {
    //         console.log(res.data);
    //         setMessage(res.data)
    //     })
    // }

    const sendMessage = (e) => {
        e.preventDefault();
        // axios.post('/save/message', { 
        //     name,
        //     email,
        //     message,
        // })
        emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
            .then(result => {
        console.log(result.text);
        alert("Message Sent, I'll get back to you ASAP, Thank you. ", result.text);
                
    }, (error) => {
        console.log(error.text);
        alert("An error occured, Please try again", error.text);
        })

        setName('')
        setEmail('')
        setMessage('') 
        setPhone('') 
        setSubject('Get a Quote') 
    };
    
    return (

        <div className='message' id="message">
            <div>
                <h3 style={{ color: "#061606e0", textAlign: "center" }}>Contact Us</h3></div>
                <p style={{ textAlign: "Center", color:"blue" }}>Please fill out the form and describe your project need and we'll conatact 
                    you as soon as possible.
                </p>
            <form method='POST' onSubmit={sendMessage}>
                
                <div className='form-field'>
                        <label>I'm interested in</label>
                        <input name='subject' type='text' placeholder='Enter your suject of interest' value={subject} onChange={e => setSubject(e.target.value)}  required />

                </div>

                

                <div className='form-field'>
                    <label>My email is</label>
                    <input name='email' type='email' placeholder='Enter your email' value={email}  onChange={e => setEmail(e.target.value)}  required />

                </div>

                <div className='form-field'>
                    <label>My name is</label>
                    <input name='name' type='text' placeholder='Enter your Name' value={name} onChange={e => setName(e.target.value)}  required />

                </div>

                <div className='form-field'>
                    <label>My phone number is</label>
                    <input name='phone' type='number' placeholder='Enter your Phone number' value={phone} onChange={e => setPhone(e.target.value)}  required />

                </div>
               
               
                
                <div className='form-field'>
                    <label>Questions or Comments</label>
                    <textarea name='message' placeholder='Enter your questions or comments' value={message}  onChange={e => setMessage(e.target.value)} required />
                

                </div >
               
               
                <button
                    type='submit'
                    label='Send'
                    
                    className='send-button'
                    >Send</button>              

            </form>

        </div>

    )
}

export default Contact
