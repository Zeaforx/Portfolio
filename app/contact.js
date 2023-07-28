'use client'
import React from "react";
import { doc, setDoc } from "firebase/firestore"; 

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { useState } from "react";


const firebaseConfig = {
    apiKey: "AIzaSyBht5YNyZ7tytlLE-lnFbkzgEzUSrELEzY",
    authDomain: "meme-generator-f0303.firebaseapp.com",
    projectId: "meme-generator-f0303",
    storageBucket: "meme-generator-f0303.appspot.com",
    messagingSenderId: "303738125822",
    appId: "1:303738125822:web:57d7f9d4f9ddab1217d4af",
    measurementId: "G-71NGL90K6F",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);




export default function Contact() {
    const [form, setForm] = React.useState(
        {
            name: "",
            email: "",
            message: "",
            inquiry: ""
        }
    )

    function handleChange(event) {
        setForm(prevform => {
            return {
                ...prevform,
                [event.target.name]: event.target.value
            }
        })
        console.log(event.target)
    }

    async function handleSubmit(event) {
        // event.preventDefault();


        await setDoc(doc(db, "contactFormData", form.name), {
        // name: form.name,
        email: form.email,
        message: form.message,
        inquiry: form.inquiry
        });
        
    }



    return (
        <section className="contact-section" id="contact" >
            <div className="contact-container">
                <div className="contact-text">
                    <h3>Contact us Today</h3>

                    <p>
                        Fill in the form below to contact me. I am here to
                        answer how many questions you have and provide you with
                        top-notch web development services.
                    </p>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group">
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    id="name"
                                />
                                <label htmlFor="name">
                                    <i
                                        className="fa fa-user"
                                        // aria-hidden="true"
                                    >
                                        {" "}
                                    </i>{" "}
                                    Name
                                </label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    id="email"
                                />
                                <label htmlFor="email">
                                    <i class="fa-regular fa-envelope"></i> Email
                                </label>
                            </div>
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="number">number</label>
                            <input id="number" />
                        </div> */}

                        <div className="form-group">
                            <select
                                value={form.inquiry}
                                onChange={handleChange}
                                name="inquiry"
                            >
                                <option>
                                     please select an inquiry
                                </option>

                                <option value="web-development">
                                    Website Development
                                </option>
                                <option value="ecommerce"> E-commerce </option>
                                <option value="web-maintenance">
                                    Website maintemance
                                </option>
                                <option value="other">other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                value={form.message}
                                id="message"
                                rows="8"
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="message">
                                <i class="fa-solid fa-comment"></i> Message
                            </label>
                        </div>
                        <button type="submit">submit</button>
                    </form>
                    {/* <pre>{JSON.stringify(form.inquiry)}</pre> */}
                </div>
            </div>
        </section>
    );
}
