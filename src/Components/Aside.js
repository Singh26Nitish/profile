import React from "react";
import profile from './resource/profilepic.jpg';
import data from './data.json';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Aside(){
    return(
        <aside className="w-1/5 mr-6 text-font bg-light rounded-3xl thin-border h-full overflow-hidden">
            {/* About me */}
            <div className="flex flex-col items-center">
                <div >
                    <img src={profile} alt="pfp" className="h-40 w-auto mt-10 rounded-3xl"/>
                </div>
                <div className="font-bold text-3xl mt-6 font-poppins text-font">
                    <p>Nitish Singh</p>
                </div>
                <div className="text-sm p-2 mt-6 bg-content rounded-lg flex flex-col items-center text-font">
                    <p>Computer Engineer</p>
                    <p>Web Developer</p>
                </div>
            </div>

            {/* My handles */}

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
            <div className="mx-2"><a href="https://x.com/Singh_Nitish26"><i class="fa-brands fa-x-twitter"></i></a></div>
            <div className="mx-2"><a href="https://www.instagram.com/singh_nitish26/"><i class="fa-brands fa-instagram"></i></a></div>
        </div>
        </aside>
    )
}

export default Aside;