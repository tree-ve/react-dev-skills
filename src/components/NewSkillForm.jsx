import "./NewSkillForm.css";
import SelectOptions from "./SelectOptions"

function NewSkillForm() {
    return (
        <form className="NewSkillForm">
            Skill<input></input>
            Level<select><SelectOptions /></select>
            <button>ADD SKILL</button>
        </form>
    )
}

export default NewSkillForm