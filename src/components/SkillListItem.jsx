import "../styles/SkillListItem.css";


function SkillListItem({ skill, level, index }) {
    return (
        <li className="SkillListItem" style={{
        }}>
            {/* <div className="index">{index}</div> */}
            <div className="skill">{skill}</div>
            <div className="level">LEVEL {level}</div>
        </li>
    )
}

export default SkillListItem