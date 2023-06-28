import "./SkillList.css";
import SkillListItem from "./SkillListItem"

function SkillList({ skills }) {
    return (
        <ul className="SkillList">
            {skills.map((s, idx) => (
                <SkillListItem skill={s.name} level={s.level} index={idx + 1} key={idx} />
            ))}
        </ul>
    );
}

export default SkillList