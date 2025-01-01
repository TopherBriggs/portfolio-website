import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { emailUserId, emailServiceId, emailTemplate} from '../constants';
const Contact = () => {
    const [loading, setloading] = useState(false);
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);
        try {
            await emailjs.send({emailServiceId}, {emailTemplate},
                { from_name: form.name, to_name: 'Topher', from_email: form.email, to_email: 'chris@topherbrig.gs', message: form.message },
            {emailUserId})
            setloading(false);
            alert('Message sent successfully');
            setForm({
                name: '',
                email: '',
                message: ''
            })
        } catch (error) {
            setloading(false);
            console.log(error);
            alert('Something went wrong, try again later');
        }
        
    }
    return (
        <section className='c-space my-20' id='contact'>
            <div className='relative min-h-screen flex flex-col justify-center items-center'>
                <img src='/assets/terminal.png' alt='terminal-background' className='absolute inset-0 min-h-screen' />
                <div className='contact-container'>
                    <h3 className='head-text'>Contact Me</h3>
                    <p className='text-lg text-white-600 mt-3'>Get in touch with me</p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input type='text' name='name' value={form.name} required onChange={handleChange} placeholder='John Doe' className='field-input' />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input type='email' name='email' value={form.email} required onChange={handleChange} placeholder='johndoe@example.com' className='field-input' />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your Message</span>
                            <textarea name='message' value={form.message} required rows={5} onChange={handleChange} placeholder='Hi, I would like to hire you...' className='field-input' />
                        </label>
                        <button type='submit' className='field-btn' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow' />
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact