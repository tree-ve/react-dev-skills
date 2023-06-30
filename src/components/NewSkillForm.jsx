import "../styles/NewSkillForm.css";
import SelectOptions from "./SelectOptions";
import { useState } from "react";

// function NewSkillForm({ skills, setSkills }) {
function NewSkillForm(skills) {

    // const [newSkill, setNewSkill] = useState({
    //     skill: "",
    //     level: ""
    // })

    const [skillFormData, setSkillFormData] = useState({
        skill: "",
        level: 3
    })

    function handleChange(e) {
        e.preventDefault()
        console.log('change')
        console.log(`${e.target.name}: ${e.target.value}`)
        // console.log('1', skills)
        // const newSkillFormData = {[e.target.name]: e.target.value};
        // console.log(newSkill.skill, newSkill.level)
        const newSkillFormData = {
            ...skillFormData,
            [e.target.name]: e.target.value
        };
        // console.log('2', skills)
        setSkillFormData(newSkillFormData);
        // const newSkills = [...skills, newSkill];
        // setSkills(newSkills);
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newSkills = [
            ...skills.skills, skillFormData
        ];
        skills.setSkills(newSkills);
        setSkillFormData({
            skill: "",
            level: 3
        })
    }

    return (
        <form className="NewSkillForm" onSubmit={(e) => e.preventDefault()}>
            Skill<input
                name="skill"
                value={skillFormData.skill}
                onChange={handleChange}
            />
            Level<select
                name="level"
                value={skillFormData.level}
                onChange={handleChange}
            ><SelectOptions /></select>
            <button type="submit" onClick={handleSubmit}>ADD SKILL</button>
        </form>
    )
}

export default NewSkillForm