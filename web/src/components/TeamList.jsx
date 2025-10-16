import { useState } from "react";
// import ProfileCard from "./Profilecard";
import TeamMember from "./TeamMember";
import "./TeamList.css";

const teamMembers = [
  {
    id: 1,
    name: "Alice",
    role: "Frontend Developer",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Bob",
    role: "Backend Developer",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "sravan",
    role: "UI/UX Designer",
    img: "https://i.pravatar.cc/150?img=3",
  },
];

const TeamList = () => (
  <div>
    <h2>OUR TEAM</h2>
    <div>
      {teamMembers.map((member) => (
        <TeamMember
          key={member.id}
          name={member.name}
          role={member.role}
          img={member.img}
        />
      ))}
    </div>
  </div>
);

// function TeamList(){
//     const[showTeam, setShowTeam] = useState(true);

//     const team = [
//     { id: 1, name: "Sravan", role: "Frontend Developer", avatar: "https://i.pravatar.cc/100?img=1" },
//     { id: 2, name: "Alice", role: "UI Designer", avatar: "https://i.pravatar.cc/100?img=2" },
//     { id: 3, name: "Bob", role: "Backend Developer", avatar: "https://i.pravatar.cc/100?img=3" },
//   ];
//   return(
//     <div className="team-container">
//         <button onClick={() => setShowTeam(!showTeam)}>
//         {showTeam ? "Hide Team" : "Show Team"}
//         </button>

//         {showTeam && (
//         <div className="team-list">
//           {team.map(member => (
//             <ProfileCard key={member.id} {...member} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

export default TeamList;
