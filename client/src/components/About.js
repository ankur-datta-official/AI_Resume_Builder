import React from 'react'
import Navbar from './Navbar'

export default function AboutUs() {
  return (
    <>
    <Navbar/>
    <div style={{backgroundImage:"url('https://static.vecteezy.com/system/resources/previews/007/934/086/original/abstract-purple-and-pink-gradient-waves-background-glowing-lines-on-purple-background-vector.jpg')",
    }}>
        <div className="container">
        <div className="container pt-3 mb-2" style={{textAlign:"center", fontWeight:"bolder", fontSize:"7vh", color:"white"}}> About US</div>
        <div className="container mb-4" style={{textAlign:"left", color:"white", fontSize:"3.5vh", fontWeight:"bold", fontFamily:"Arial", lineHeight:"3.7vh"}}>At AI Resume Builder, we specializing in helping individuals unlock their career potential through personalized, AI-enhanced resumes.
             Our Platform combines smart technology with expert design principles to help you create a standout resume that truly represents who you are and what you bring 
             to the table.
        </div>
        <div className="container mt-3 mb-4" style={{textAlign:"left", color:"white", fontSize:"3.5vh", fontWeight:"bold", fontFamily:"Arial", lineHeight:"3.7vh"}}>
     Enhance your resume with professional formatting, skill optimization, and ATS-friendly features, boosting your chances of standing out to recruiters and getting selected for your desired role.
     </div>
        </div>
       

        <div class="accordion" id="accordionExample" style={{color:"white", fontWeight:"bold", border:"none", height:"56.7vh", width:"80%", marginLeft:"12%"}}>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" 
            style={{ color:"white", fontWeight:"bold", fontSize:"3vh",border:"2px solid white"}} aria-controls="collapseOne">
                How to use it?
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={{backgroundColor:"slateblue", color:"white", fontWeight:"bold"}}>
                <ul style={{lineHeight:"2.8vh", fontSize:"2.5vh" }}>
                    <li>
                    Select the resume you want to enhance using the AI.
                    </li>
                    <li>
                    Choose the template of your choice.
                    </li>
                </ul>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" 
             style={{ color:"white", fontWeight:"bold", fontSize:"3vh", border:"2px solid white"}} aria-controls="collapseTwo">
               Why to use AI RESUME BUILDER
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={{backgroundColor:"slateblue", color:"white", fontWeight:"bold", fontSize:"2.5vh"}}>
                AI RESUME BUILDER analyze your given resume and your chosen template and then extract the data from your resume and make a new resume accordind to your
                chosen template.
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
