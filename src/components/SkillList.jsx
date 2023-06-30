import "../styles/SkillList.css";
import SkillListItem from "./SkillListItem"

function SkillList({ skills }) {
    return (
        <ul className="SkillList">
            {console.log(skills)}
            {skills.map((s, idx) => (
                <SkillListItem skill={s.skill} level={s.level} index={idx + 1} key={idx} />
            ))}
        </ul>
    );
}

export default SkillList