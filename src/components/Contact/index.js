import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        let timeout = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_g1g9641',
                refForm.current,
                '65qRe6D7wiXQcvjxk'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>

                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input type='text' name='sbject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Shikhar Agrawal,
                    <br />
                    India
                    <br />
                    Mangeram Balkishan House Khetrajpur<br />
                    Sambalpur Odisha-768003 <br />
                    <span>shikharagrawal2411@gmail.com</span>
                </div>
                {/* <div className="map-wrap">
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url='https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>Come here for a cup of tea</Popup>
                        </Marker>
                    </MapContainer>
                </div> */}
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact

