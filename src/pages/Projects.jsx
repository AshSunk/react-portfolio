function Projects() {
  const projectList = [
    {
      title: "MARS Robotics - Autonomous Navigation",
      description: "Developed obstacle avoidance systems and real-time hazard identification for planetary rover prototypes using OpenCV, Python, and C++.",
      link: "#"
    },
    {
      title: "Urban Heat Island Geospatial Analysis",
      description: "Conducted a geospatial analysis of San Diego census tracts using ArcGIS and Python to map heat disparities.",
      link: "#"
    }
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {projectList.map((proj, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <a href={proj.link} style={{ color: '#3498db', textDecoration: 'none' }}>View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;