import React from "react";

function Footer() {
    return (
        <footer className="container">
            <div >
                &copy; 2020 - MyFace <a className="footerLink" asp-area="" asp-controller="Home"
                                        asp-action="Privacy">Privacy</a>
            </div>
        </footer>
    );
}

export {Footer};