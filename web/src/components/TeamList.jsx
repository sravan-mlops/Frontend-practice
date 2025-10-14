import { useState } from "react";
import ProfileCard from "./Profilecard";
import "./TeamList.css";


function TeamList(){
    const[showTeam, setShowTeam] = useState(true);

    const team = [
    { id: 1, name: "Sravan", role: "Frontend Developer", avatar: "https://i.pravatar.cc/100?img=1" },
    { id: 2, name: "Alice", role: "UI Designer", avatar: "https://i.pravatar.cc/100?img=2" },
    { id: 3, name: "Bob", role: "Backend Developer", avatar: "https://i.pravatar.cc/100?img=3" },
  ];
  return(
    <div className="team-container">
        <button onClick={() => setShowTeam(!showTeam)}>
        {showTeam ? "Hide Team" : "Show Team"}
        </button>

        {showTeam && (
        <div className="team-list">
          {team.map(member => (
            <ProfileCard key={member.id} {...member} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TeamList;