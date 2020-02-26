import React from "react";


function Footer(){

    return (
            <footer className="border-top footer text-muted">
                <div className="container">
                    &copy; 2020 - MyFace <a className="footerLink" asp-area="" asp-controller="Home"
                                            asp-action="Privacy">Privacy</a>
                </div>
            </footer>
    );
}

export {Footer};