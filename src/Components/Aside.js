import React, { useState } from "react";
import profile from './resource/profilepic.jpg';
import data from './data.json';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Aside() {
    // State to track visibility of the handles section
    const [showContacts, setShowContacts] = useState(false);

    // Function to toggle visibility
    const toggleContacts = () => {
        setShowContacts(!showContacts);
    };

    return (
        <aside className="text-font bg-light rounded-3xl m-2 pb-2">
            {/* About me section */}
            <div className="flex justify-start items-center px-4">
                <div className="mr-6">
                    <img src={profile} alt="pfp" className="h-28 w-auto mt-10 rounded-3xl" />
                </div>

                <div className="flex justify-between w-full">
                    <div className="flex-col">
                        <div className="font-bold text-2xl mt-6 font-poppins text-font">
                            <p>Nitish Singh</p>
                        </div>
                        <div className="text-sm p-2 mt-2 bg-content rounded-lg flex items-center text-font">
                            <p>Computer Engineer ,</p>
                            <p> Web Developer</p>
                        </div>
                    </div>

                    {/* Toggle button aligned to the right */}
                    <div className="mt-2 ml-auto rounded-lg text-sm">
                        <button 
                            className="p-1 text-high" 
                            onClick={toggleContacts}
                        >
                            {showContacts ? "Hide Contacts" : "Show Contacts"}
                        </button>
                    </div>
                </div>
            </div>

            {/* My handles section with smooth transition */}
            <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${showContacts ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="mt-10 flex flex-col ml-3">
                    {data.socials.map((card, index) => (
                        <div key={index} className="flex flex-row mb-4">
                            <div className="rounded-lg thin-border border-white p-3 px-4 mr-2 text-high">
                                <i className={`${card.logo1} ${card.logo2}`}></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">{card.title}</p>
                                <p className="text-md">
                                    <a href={card.link} target="_blank" rel="noopener noreferrer">
                                        {card.username}
                                    </a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mb-2">
                    <div className="mx-2"><a href="https://x.com/Singh_Nitish26"><i className="fa-brands fa-x-twitter"></i></a></div>
                    <div className="mx-2"><a href="https://www.instagram.com/singh_nitish26/"><i className="fa-brands fa-instagram"></i></a></div>
                </div>
            </div>
        </aside>
    );
}

export default Aside;
