import React from "react";
import ecommerce from "../Components/resource/ecommerce.png";
import movieapp from "../Components/resource/movieapp.png";
import signup from "../Components/resource/signup.png";
import matchgame from "../Components/resource/matchgame.png";
import sidebar from "../Components/resource/sidebar.png";
import jokes from "../Components/resource/jokes.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header";
import Footer from "../Components/Footer";




function Project() {
  
    return(
      <> 
      <Header />
      <div className="flex h-auto  w-4/5 mx-auto ">
        <div className="grid md:grid-cols-3 md:gap-4">

          {/* project card */}
          <div class="w-full md:px-4 py-6" >
            <div class="rounded-lg shadow-md overflow-hidden">

              <img src={ecommerce} class="w-full" alt="E-commerce" />

              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">E-commerce</h3>
                <p class="text-gray-600">It's a e-commerce website.</p>
                <p class="text-gray-600">Tech stack used Html, css and Js.</p>
                <p class="text-gray-600">This is fully responsive.</p>
                <div className="flex-start">
                  <FontAwesomeIcon icon={faGlobe} onClick={() => { window.open('https://shoes-eccommerce-site.netlify.app/', '_blank'); }} className="m-2 text-3xl"/>
                  <FontAwesomeIcon icon={faGithub} onClick={() => { window.open('https://github.com/Singh26Nitish/ecommerce-sample', '_blank'); }} className="m-2 text-3xl"/>
                </div>
              </div>

            </div>
          </div>

          {/* project card */}
          <div class="w-full md:px-4 py-6">
            <div class="rounded-lg shadow-md overflow-hidden">

              <img src={movieapp} class="w-full" alt="Movie App" />

              <div class="p-6">
                <h3 class="text-2xl font-semibold mb-3">Movie App</h3>
                <p class="text-gray-600">This is movie information app.</p>
                <p class="text-gray-600">It use API request to deliver content.</p>
                <p class="text-gray-600">It shows plot, imdb rating, etc.</p>
                <div className="flex-start">
                  <FontAwesomeIcon icon={faGlobe} onClick={() => { window.open('https://singh26nitish.github.io/Movie-Info-Web-App/', '_blank'); }} className="m-2 text-3xl"/>
                  <FontAwesomeIcon icon={faGithub} onClick={() => { window.open('https://github.com/Singh26Nitish/Movie-Info-Web-App', '_blank'); }} className="m-2 text-3xl"/>
                </div>
              </div>

            </div>
          </div>

          {/* project card */}
          <div class="w-full md:px-4 py-6">
            <div class="rounded-lg shadow-md overflow-hidden">

              <img src={signup} class="w-full" alt="Sign up page" />

              <div class="p-6">
                <h3 class="text-2xl font-semibold mb-3">Sign up page</h3>
                <p class="text-gray-600">It's basic Sign-up page.</p>
                <p class="text-gray-600">It's just made to display skills</p>
                <p class="text-gray-600">Tech stack html css</p>
                <div className="flex-start">
                  <FontAwesomeIcon icon={faGlobe} onClick={() => { window.open('https://singh26nitish.github.io/Signup-page/', '_blank'); }} className="m-2 text-3xl"/>
                  <FontAwesomeIcon icon={faGithub} onClick={() => { window.open('https://github.com/Singh26Nitish/Signup-page', '_blank'); }} className="m-2 text-3xl"/>
                </div>
              </div>

            </div>
          </div>

          {/* project card */}
          <div class="w-full md:px-4 py-6">
            <div class="rounded-lg shadow-md overflow-hidden">

              <img src={matchgame} class="w-full" alt="Memory Game"  />

              <div class="p-6">
                <h3 class="text-2xl font-semibold mb-3">Memory Game</h3>
                <p class="text-gray-600">It's a simple memory the card game.</p>
                <p class="text-gray-600">Here you have to find matching card.</p>
                <p class="text-gray-600">It use javascript array, random methods.</p>
                <div className="flex-start">
                  <FontAwesomeIcon icon={faGlobe} onClick={() => { window.open('https://singh26nitish.github.io/Memory-Game/','_blank');}} className="m-2 text-3xl"/>
                  <FontAwesomeIcon icon={faGithub} onClick={() => { window.open('https://github.com/Singh26Nitish/Memory-Game', '_blank'); }} className="m-2 text-3xl"/>
                </div>
              </div>

            </div>
          </div>

          {/* project card */}
          <div class="w-full md:px-4 py-6">
            <div class="rounded-lg shadow-md overflow-hidden">

              <img src={sidebar} class="w-full" alt="Side-bar" />

              <div class="p-6">
                <h3 class="text-2xl font-semibold mb-3">Side-bar</h3>
                <p class="text-gray-600">It's sidebar design.</p>
                <p class="text-gray-600">It's fully responsive.</p>
                <p class="text-gray-600">You can change theme as well.</p>
                <div className="flex-start">
                  <FontAwesomeIcon icon={faGlobe} onClick={() => { window.open('https://singh26nitish.github.io/sidebar-menu/', '_blank'); }} className="m-2 text-3xl"/>
                  <FontAwesomeIcon icon={faGithub} onClick={() => { window.open('https://github.com/Singh26Nitish/sidebar-menu', '_blank'); }} className="m-2 text-3xl"/>
                </div>
              </div>

            </div>
          </div>

          {/* project card */}
          <div class="w-full md:px-4 py-6">
            <div class="rounded-lg shadow-md overflow-hidden">

              <img src={jokes} class="w-full" alt="Jokes" />

              <div class="p-6">
                <h3 class="text-2xl font-semibold mb-3">Jokes</h3>
                <p class="text-gray-600">It's just some simple jokes.</p>
                <p class="text-gray-600">It's a static react page.</p>
                <p class="text-gray-600">All these are written using props.</p>
                <div className="flex-start">
                  <FontAwesomeIcon icon={faGlobe} onClick={() => { window.open('https://jokes-singh-nitish26.netlify.app/', '_blank'); }} className="m-2 text-3xl"/>
                  <FontAwesomeIcon icon={faGithub} onClick={() => { window.open('https://github.com/Singh26Nitish/jokes', '_blank'); }} className="m-2 text-3xl"/>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      <Footer />
      </>
    );
}

export default Project;