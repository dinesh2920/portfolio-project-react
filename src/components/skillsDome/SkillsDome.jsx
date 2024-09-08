import './SkillsDome.scss';

const skills = [
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 70 },
  { name: 'JavaScript', level: 75 },
  // Add more skills as needed
];

const SkillsDome = () => {
  return (
    <div className="skills-dome">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-name">{skill.name}</div>
          <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
        </div>
      ))}
    </div>
  );
};

export default SkillsDome;