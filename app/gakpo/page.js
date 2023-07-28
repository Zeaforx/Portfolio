
// "use client";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { useState } from "react";
import { collection, addDoc, getDocs  } from "firebase/firestore";
import React from "react";

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

// try {
//     const docRef = await addDoc(collection(db, "users"), {
//         first: "Ada",
//         last: "Lovelace",
//         born: 1815,
//     });
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("Error adding document: ", e);
// }


// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
const querySnapshot = await getDocs(collection(db, "users"));


export default function Home() {
    // const [data, setData] = useState()

    querySnapshot.forEach((doc) => {
        const data = doc.data()
        // setData(JSON.stringify(data));
        console.log(`${doc.id} => ${JSON.stringify(data)}`);
    });
    


    return ( 
        <>
            {/* {data.first}
            {data.last}
            {data.middle} */}
            <pre> </pre>
            <h1>lol</h1>


        </> 
    
    
    );
}
