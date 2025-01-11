import React from 'react';
import template1 from '../images/template1.jpg';
import template2 from '../images/template2.jpg';
import template3 from '../images/template3.jpg';
import template4 from '../images/template4.jpg';
import template5 from '../images/template5.jpg';
import template6 from '../images/template6.jpg';
import template7 from '../images/template7.jpg';
import template8 from '../images/template8.jpg';

export default function TemplateCard() {
    return (
        <div style={{marginTop:"75vh",background:"white"}}>
            <div className="container">
                <div className="row">
                    <div class="card my-3 mx-4" style={{width:"auto",textAlign:"center"}} >
                        <img src={template1} class="card-img-top" alt="Template" style={{width:"310px",height:"500px"}}/>
                        <div class="card-body">
                            <a href="#" class="btn btn-primary">Use This Template</a>
                        </div>
                    </div>
                    <div class="card my-3 mx-4" style={{width:"auto",textAlign:"center"}} >
                        <img src={template2} class="card-img-top" alt="Template" style={{width:"20vw",height:"60vh"}}/>
                        <div class="card-body">
                            <a href="#" class="btn btn-primary">Use This Template</a>
                        </div>
                    </div>
                    <div class="card my-3 mx-4" style={{width:"auto",textAlign:"center"}} >
                        <img src={template3} class="card-img-top" alt="Template" style={{width:"20vw",height:"60vh"}}/>
                        <div class="card-body">
                            <a href="#" class="btn btn-primary">Use This Template</a>
                        </div>
                    </div>
                    <div class="card my-3 mx-4" style={{width:"auto",textAlign:"center"}} >
                        <img src={template4} class="card-img-top" alt="Template" style={{width:"20vw",height:"60vh"}}/>
                        <div class="card-body">
                            <a href="#" class="btn btn-primary">Use This Template</a>
                        </div>
                    </div>
                    <div class="card my-3 mx-4" style={{width:"auto",textAlign:"center"}} >
                        <img src={template5} class="card-img-top" alt="Template" style={{width:"20vw",height:"60vh"}}/>
                        <div class="card-body">
                            <a href="#" class="btn btn-primary">Use This Template</a>
                        </div>
                    </div>
                    <div class="card my-3 mx-4" style={{width:"auto",textAlign:"center"}} >
                        <img src={template6} class="card-img-top" alt="Template" style={{width:"20vw",height:"60vh"}}/>
                        <div class="card-body">
                            <a href="#" class="btn btn-primary">Use This Template</a>
                        </div>
                    </div>
                    <div class="card my-3 mx-4" style={{width:"auto",textAlign:"center"}} >
                        <img src={template7} class="card-img-top" alt="Template" style={{width:"20vw",height:"60vh"}}/>
                        <div class="card-body">
                            <a href="#" class="btn btn-primary">Use This Template</a>
                        </div>
                    </div>
                    <div class="card my-3 mx-4" style={{width:"auto",textAlign:"center"}} >
                        <img src={template8} class="card-img-top" alt="Template" style={{width:"20vw",height:"60vh"}}/>
                        <div class="card-body">
                            <a href="#" class="btn btn-primary">Use This Template</a>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </div>
    )
}
