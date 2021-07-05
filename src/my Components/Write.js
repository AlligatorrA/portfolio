import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faGithub,
    faTwitter,
    faLinkedin

} from "@fortawesome/free-brands-svg-icons";
// import { Link, Route } from "react-router-dom";

function Write() {
    return (

        <div >
            <main className="mainwrite" >
                <section className="bloglink">
                    <a className="poe" href="https://alligatorrswords.blogspot.com/"> Blogs</a>
                </section>
                <section className="bloglink2">
                    <a className="poe" href="https://www.instagram.com/alligatorr.swords/"> Poetry</a>
                </section>
            </main>
            <footer >
                <div >    
                <a className="footlink" href="https://github.com/AlligatorrA">
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                </a>
                <a className="footlink" href="https://twitter.com/Aryakkhauj" >
                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                </a>
                <a className="footlink" href="https://www.linkedin.com/in/anand-raj-b10599171/">
                   <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </a>
                 </div>
            </footer>
        </div>
    )
}

export default Write;
