import React from "react";

const SocialLinks = ({links = []}) => {
    return(
        console.log(links),
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
            {links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noreferrer" 
                style={{textDecoration:"none",
                    color: "#0a66c2",
                    fontWeight: "bold",
                    padding: "10px 15px",
                    border: "1px solid #0a66c2",
                    borderRadius: "5px",
                    transition: "all 0.3s",
                }}
                onMouseEnter={(e) =>{
                    e.currentTarget.style.backgroundColor = "#0a66c2";
                    e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#0a66c2";
                }}>
                {link.name}
            </a>
            ))} 

        </div>
    );
};

export default SocialLinks;