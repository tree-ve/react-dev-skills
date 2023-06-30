// Import our own custom components
import SkillList from "./components/SkillList";
import NewSkillForm from "./components/NewSkillForm";
import "./styles/styles.css";
// Import useState so we can state some stateful values
import { useState } from "react";

// Add the skills array
// const skills = [
//     { skill: "HTML", level: 5 },
//     { skill: "CSS", level: 3 },
//     { skill: "JavaScript", level: 4 },
//     { skill: "Python", level: 2 },
// ];

// App.js should be the parent to our entire React application
function App() {

    // State at the top level of the component
    const [skills, setSkills] = useState([
        { skill: "HTML", level: 5 },
        { skill: "CSS", level: 3 },
        { skill: "JavaScript", level: 4 },
        { skill: "Python", level: 2 },
    ]);

    const [showSkills, setShowSkills] = useState(true)
    
    // console.log('state value', skills)
    // console.log('state setter', setSkills)

    // Inside the functional component we can write logical JavaScript at the top level (inside the function, outside of the return)
    
    // To return a user interface, we use the return keywaord to return something similar to HTML

    // Some attributes we can't use, like "class" or "for" as these are reserved words in JS, there are alternatives like className and htmlFor
    return (
        // Fragments are empty HTML tags that satisfy the single parent necessity in a React component
        // They won't be displayed in the final rendered HTML page
        <>
            <div className="App">
                <h1 className="title">React Dev Skills</h1>
                <button className="btn" onClick={() => setShowSkills(!showSkills)}>{ showSkills ? 'HIDE': 'SHOW' }</button>
                {/* Skill List goes here */}
                {showSkills && <SkillList skills={skills} />}
                <hr></hr>
                <NewSkillForm skills={skills} setSkills={setSkills}/>
            </div>
        </>
    )

    // Imperitive to building a react app is the return keyword that will return our "HTML"
}

export default App