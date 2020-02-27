import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="container">
            <div>
                &copy; 2020 - MyFace <Link className="footerLink" to="Privacy">Privacy</Link>
            </div>
        </footer>
    );
}
export {Footer};