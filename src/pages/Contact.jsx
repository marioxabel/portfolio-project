import { useState } from "react"
import './contact.css'

export default function Contact() {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')

    function handleInputChange(e) {
        const { name, value } = e.target
        return name === 'name' ? setName(value) 
            : name === 'email' ? setEmail(value) 
            : setMessage(value)
    }

    function handleSubmitForm(e) {
        e.preventDefault()

        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <>
            <h1>Contact</h1>
            <form onSubmit={handleSubmitForm} >
                <input 
                    value={name}
                    type="text" 
                    name="name" 
                    id="" 
                    onChange={handleInputChange}
                    placeholder="Enter your Name"
                    className="form__input"
                    required
                />
                <input 
                    value={email}
                    type="email" 
                    name="email" 
                    id="" 
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="form__input"
                    required
                />
                <textarea 
                    value={message}
                    name="message" 
                    id="" 
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    className="form__input form__input-message"
                    required
                />
                <button type="submit" className="form__button" >Submit</button>

            </form>
        </>
    )
}


