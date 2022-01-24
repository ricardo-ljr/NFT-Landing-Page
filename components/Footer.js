import React, { useState, useEffect } from "react"
import acios from 'axios'
import footerdata from '../data/footerSection.json';
import axios from 'axios';

const Footer = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [notes, setNotes] = useState("")

    const [data, setData] = useState([])

    const handleSubmit = (e) => {

        const data = {
            Name: name,
            Email: email,
            Notes: notes
        }

        axios.post("https://sheet.best/api/sheets/dd053516-090a-4daa-92ce-dcd0a0b045ea", data).then(response => {
            console.log(data)
            setName('');
            setEmail('');
            setNotes('');
        })

        e.preventDefault();
    }

    return (
        <footer id="footer">
            <div className="header-footer">
                <h3>{footerdata.title}</h3>
            </div>

            <form>
                <div className="form-group">
                    <form className="form-group" autoComplete="off">
                        <input type="text" placeholder="John Doe" required onChange={(e) => setName(e.target.value)} value={name} />
                        <input type="email" placeholder="Name@company.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
                        <textarea type="text" placeholder="How Can We Help" require onChange={(e) => setNotes(e.target.value)} value={notes} />
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </form>
        </footer >
    )
};

export default Footer;