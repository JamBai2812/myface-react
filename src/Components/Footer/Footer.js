﻿import React from "react";
import {Link} from "react-router-dom";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
                <div className="footerText">&copy; 2020 - MyFace</div> <Link className="footerLink" to="Privacy">Privacy</Link>
        </footer>
    );
}
export {Footer};