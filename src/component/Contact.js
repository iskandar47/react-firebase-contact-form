import React, {useState} from 'react'
import "./Contact.css"
import {database} from "../firebase"

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    
    const handleSubmit = (e)=> {
        e.preventDefault()
        setLoading(true)

        database.collection("contact")
        .add({
            name : name,
            email : email,
            message : message
        })
        .then(()=>setLoading(false))
        .catch((error) => {
            alert(error.message)
            setLoading(false)
        })
        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <h1>Contact Form (react / firebase)</h1>
            <label>Name</label>
            <input onChange={(e)=> setName(e.target.value)} value={name} placeholder="name" required />
            <label>Email</label>
            <input onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Email" required />
            <label>Message</label>
            <textarea onChange={(e)=> setMessage(e.target.value)} value={message} placeholder="Your message" required />
            <button type="submit">{loading ? "Submiting..." : "Submit"}</button>
        </form>
    )
}

export default Contact