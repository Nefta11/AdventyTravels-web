import { useState } from "react";
import "./TeamSection.css";

const teamMembers = [
    {
        id: 1,
        name: "Nombre 1",
        position: "Puesto de Trabajo",
        image: "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/feature/Fixed-abouUS/src/assets/images/aboutUs/members.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
        id: 2,
        name: "Nombre 2",
        position: "Puesto de Trabajo",
        image: "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/feature/Fixed-abouUS/src/assets/images/aboutUs/members.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
        id: 3,
        name: "Nombre 3",
        position: "Puesto de Trabajo",
        image: "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/feature/Fixed-abouUS/src/assets/images/aboutUs/members.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
        id: 4,
        name: "Nombre 4",
        position: "Puesto de Trabajo",
        image: "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/feature/Fixed-abouUS/src/assets/images/aboutUs/members.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
];

const TeamSection = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const handleCardClick = (member) => {
        if (selectedMember && selectedMember.id === member.id) {
            setSelectedMember(null);
        } else {
            setSelectedMember(member);
        }
    };

    return (
        <section className="team-section">
            <h2 className="section-title">¡CONÓCENOS!</h2>
            <h3 className="section-subtitle">Familia Good Travel</h3>
            <div className="team-container">
                {teamMembers.map((member) => (
                    <div key={member.id} className="team-card" onClick={() => handleCardClick(member)}>
                        <div className="image-container">
                            <img src={member.image} alt={member.name} className="team-image" />
                            {selectedMember && selectedMember.id === member.id && (
                                <div className="overlay">
                                    <div className="overlay-text">{member.description}</div>
                                </div>
                            )}
                        </div>
                        <div className="team-info">
                            <h4 className="team-name">{member.name}</h4>
                            <p className="team-position">{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
