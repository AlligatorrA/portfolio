import React from 'react';
import "./App"
import "./all.css"
// import Home from './my Components/Home';


import { Link } from "react-router-dom";


function Nav() {

    return (
        <>
            <nav className="navigation container">
                <ul className="non-bullets nav-pills" >

                    <li className="list-items-inline"  >
                        <Link to="/My Components/Home" className="L1" > Home </Link>
                    </li>
                    <li className="list-items-inline"  >
                        <Link to="/My Components/About" className="L1">  About </Link>
                    </li>
                    <li className="list-items-inline"  >
                        <Link to="/My Components/Work" className="L1"> Projects </Link>
                    </li>
                    <li className="list-items-inline" >
                        <Link to="/My Components/Write" className="L1"> Writes </Link>
                    </li>
                    {/* </ul> */}
                    {/* <ul className="non-bullets nav-pills ">   */}
                    <li className="list-items-inline Link2 " >
                        <Link to="/My Components/contact" className="L2" style={{textAlign:"right"}} > Contact </Link>
                    </li>




                </ul>

            </nav>
            <main className="navmain"style={{width:"auto"}} >



            </main>

            








        </ >
    )

}

export default Nav

