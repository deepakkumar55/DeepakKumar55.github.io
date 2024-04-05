import React, { useState, useEffect } from "react";
import '../CSS/Loader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    // Simulate loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                <div className="loader-container">
                    <FontAwesomeIcon icon={faSpinner} className="loader-icon" spin />
                    <p className="loader-text">Loading.....</p>
                </div>
            ) : null}
        </div>
    );
};

export default Loader;
