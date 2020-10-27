import React from "react";
import "../index.css";

const Footer = () => {
    return(
        <div className="footer">
            <p className="paragraph">Hello, 
                <br/>
                this page shows the list github followers of <a className="a" href="https://github.com/mosh-hamedani" target="_blank">Mosh Hamedani</a>, called from a <a className="a" href="https://api.github.com/users/mosh-hamedani/followers" target="_blank">github api</a>.  
             </p>
        </div>
    );
};

export default Footer;