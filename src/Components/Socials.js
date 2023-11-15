import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHashnode, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Socials(){
    return(
        <div className="flex items-center justify-center m-4">
            <div><FontAwesomeIcon icon={faTwitter} onClick={() => { window.open('https://twitter.com/Singh_Nitish26', '_blank'); }} className="m-2 text-5xl"/></div>
            <div><FontAwesomeIcon icon={faLinkedin} onClick={() => { window.open('https://www.linkedin.com/in/singh-nitish26/', '_blank'); }} className="m-2 text-5xl"/></div>
            <div><FontAwesomeIcon icon={faGithub} onClick={() => { window.open('https://github.com/Singh26Nitish', '_blank'); }} className="m-2 text-5xl"/></div>
            <div><FontAwesomeIcon icon={faInstagram} onClick={() => { window.open('https://www.instagram.com/singh_nitish26/', '_blank'); }} className="m-2 text-5xl"/></div>
            <div><FontAwesomeIcon icon={faHashnode} onClick={() => { window.open('https://hashnode.com/@SinghNitish', '_blank'); }} className="m-2 text-5xl"/></div>
        </div>
    );
}

export default Socials;