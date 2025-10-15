import React from "react";
import "./TeamMember.css";

const TeamMember = ({name, role, img}) => {
    return(
        <div className="team-card">
            <img src="{img}" alt={name} className="team-img" />
            <h3>{name}</h3>
            <p>{role}</p>
            <button className="btn">View Profile</button>
        </div>
    );

};

export default TeamMember;
 