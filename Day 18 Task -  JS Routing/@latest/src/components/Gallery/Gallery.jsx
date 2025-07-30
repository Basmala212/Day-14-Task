import React, { useEffect, useState } from 'react'
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';
import { Link, Outlet } from "react-router-dom";

export default function Gallery() {
    let [counter, setCounter] = useState(0);
    let [userName, setUserName] = useState("basmala");

    console.log("Render...");

    useEffect(() => {
        console.log("Mounting...");
        return () => {
            console.log("Unmounting");
        }
    }, []);

    useEffect(() => {
        if (counter === 0) return;
        console.log("Update phase for counter...");
    }, [counter]);

    useEffect(() => {
        if (userName === "Ramadan") return;
        console.log("Update phase for userName...");
    }, [userName]);

    useEffect(() => {
        if (counter === 0 && userName === "Ahmed") return;
        console.log("Update phase...");
    }, [counter, userName]);

    useEffect(() => {
        console.log("Mounting Interval");
        let clr = setInterval(() => {
            console.log("Interval Fired");
        }, 500);
        return () => {
            console.log("Clear Interval on Unmount");
            clearInterval(clr);
        }
    }, []);

    // This runs after every render
    useEffect(() => {
        console.log("useEffect");
    });

    function changeCounter() {
        setCounter(counter + 1);
    }

    function changeUserName() {
        setUserName("Ramadan");
    }

    return (
        <>
            <Outlet />
            <nav className="my-3">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to={'cats'}>Cats</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'dogs'}>Dogs</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <h2>Gallery</h2>
                <h2>Counter: {counter}</h2>
                <h3>Name: {userName}</h3>
                <button className='btn btn-primary me-2' onClick={changeCounter}>Increase</button>
                <button className='btn btn-secondary' onClick={changeUserName}>Change Name</button>
            </div>
        </>
    );
}
