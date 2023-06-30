import SkillList from "./components/SkillList";
import NewSkillForm from "./components/NewSkillForm";
import "./styles/styles.css";
import { useState } from "react";
function App() {
    const [skills, setSkills] = useState([
        { skill: "HTML", level: 5 },
        { skill: "CSS", level: 3 },
        { skill: "JavaScript", level: 4 },
        { skill: "Python", level: 2 },
    ]);
    const [showSkills, setShowSkills] = useState(true)
    return (
        <>
            <div className="App">
                <h1 className="title">React Dev Skills</h1>
                <button className="btn" onClick={() => setShowSkills(!showSkills)}>{ showSkills ? 'HIDE': 'SHOW' }</button>
                {showSkills && <SkillList skills={skills} />}
                <hr></hr>
                <NewSkillForm skills={skills} setSkills={setSkills}/>
            </div>
        </>
    )
}
export default App