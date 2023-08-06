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
        event.preventDefault();


        await setDoc(doc(db, "contactFormData", form.name), {
        // name: form.name,
        email: form.email,
        message: form.message,
        inquiry: form.inquiry
        });
        
    }



    return (
        <section
            className="contact-section w-100 d-flex align-items-center justify-content-center"
            id="contact"
        >
            <div className=" card-deck h-100 w-100 d-flex align-items-center justify-content-center  contact-container">
                <div className=" card h-100 w-25  contact-text d-flex align-items-center justify-content-center  ">
                    <h3 className="h1 pl-5">Contact us Today</h3>

                    <p className="fs-4 pl-5">
                        Fill in the form below to contact me. I am here to
                        answer how many questions you have and provide you with
                        top-notch web development services.
                    </p>
                </div>
                <div className=" card w-75 h-100  contact-form d-flex align-items-center justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col form-group">
                                <label htmlFor="name">
                                    <i
                                        className="fa fa-user"
                                        // aria-hidden="true"
                                    >
                                        {" "}
                                    </i>{" "}
                                    Name
                                </label>
                                <input
                                    className="form-control  name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    id="name"
                                    required
                                />
                            </div>
                            <div className="col form-group">
                                <label htmlFor="email">
                                    <i class="fa-regular fa-envelope"></i> Email
                                </label>
                                <input
                                    className="form-control email"
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    id="email"
                                    required
                                />
                            </div>
                        </div>

                        {/* <div className="form-group">
                            <label htmlFor="number">number</label>
                            <input id="number" />
                        </div> */}

                        <div className="form-group mb-3 ">
                            <select
                                className="form-control inquiry"
                                value={form.inquiry}
                                onChange={handleChange}
                                name="inquiry"
                                required
                            >
                                <option>please select an inquiry</option>

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

                        <div className="form-group mb-3">
                            <label htmlFor="message">
                                <i className="fa-solid fa-comment"></i>Message
                            </label>
                            <textarea
                                className="form-control message"
                                name="message"
                                value={form.message}
                                id="message"
                                rows="8"
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            className=" w-100 form-button btn btn-warning btn-lg btn-block"
                            type="submit"
                        >
                            submit
                        </button>
                    </form>
                    {/* <pre>{JSON.stringify(form.inquiry)}</pre> */}
                </div>
            </div>
        </section>
    );
}
