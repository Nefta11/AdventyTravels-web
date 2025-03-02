import "./TeamSection.css";

const teamMembers = [
    {
        id: 1,
        name: "Nombre 1",
        position: "Puesto de Trabajo",
        image: "", 
    },
    {
        id: 2,
        name: "Nombre 2",
        position: "Puesto de Trabajo",
        image: "/path/to/image.jpg",
    },
    {
        id: 3,
        name: "Nombre 3",
        position: "Puesto de Trabajo",
        image: "/path/to/image.jpg",
    },
];

const TeamSection = () => {
    return (
        <section className="team-section">
            <h2 className="section-title">¡CONÓCENOS!</h2>
            <h3 className="section-subtitle">Familia Good Travel</h3>
            <div className="team-container">
                {teamMembers.map((member) => (
                    <div key={member.id} className="team-card">
                        <img src={member.image} alt={member.name} className="team-image" />
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
