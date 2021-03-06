import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src={require('../avatar.jpg')} alt="avatar" style={{height:'200px'}}/>
                        </div>
                        <h2 style={{paddingTop:'2em'}}> Fatima Johora</h2>
                        <h4 style={{color:'gray'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%', textAlign:'left'}}/>
                        <p>something.....</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%', textAlign:'left'}}/>
                        <h5>Address</h5>
                        <p>432 Pastern Trail,<br/>Waterloo, ON, Canada</p>
                        <h5>Phone</h5>
                        <p>226-972-2927</p>
                        <h5>Email</h5>
                        <p>ftzisa@gmail.com</p>
                        <h5>GitHub</h5>
                        <p>https://github.com/Fjohora9333</p>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                        startYear={2018} 
                        endYear={2019} 
                        schoolName="Conestoga College" schoolDescription="Computer Applications Development (Co-op), Ontario College Graduate Certificate" courseItem1="Software Development - C#, WPF, MVVM, Object oriented programming, Visual Studio 2017" courseItem2="Database Development - MSSQL, database schema creation, stored procedure, trigger, normalization" 
                        courseItem3="Web design - PHP, JQuery, AJAX, Bootstrap, HTML, CSS, WordPress" 
                        courseItem4="System Analysis and Design - SDLC, UML diagrams, Agile, Scrum" 
                        courseItem5="MS Web Technology - ASP.NET core, MVC, Annotation, Validation, Entity Framework" courseItem6="Mobile Application Development - Node.js, ReactJs, JavaScript, es6, FireBase, NoSQL, Heroku, GitHub"/>
                        <Education 
                        startYear={2010} 
                        endYear={2014} 
                        schoolName="Khulna University of Engineering And Technology" 
                        schoolDescription="Civil Engineering, Bachelor of Science" 
                        courseItem1="Numerical Analysis and Computer Programming" 
                        courseItem2=" Mathematics, Physics, Chemistry" courseItem3="Structural Analysis and Design" courseItem4="Environmental Engineering" courseItem5="Engineering Hydraulics" courseItem6="Geotechnical Engineering"/>
                        <hr style={{borderTop:'2px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience 
                        startYear={2017} 
                        endYear="Present" 
                        jobName="Freelance Developer" 
                        jobDescription="SQL database design, Built WordPress site, Drupal7 template development, Built C# WPF desktop Application
                        "/>
                        <Experience 
                        startYear={2018} 
                        endYear={2018}
                        jobName="Cashier, Customer Service Representative" 
                        jobDescription="Responded to customer inquiries in person as well as over the phone, Customer account management involving account adjustments, Health and safety training"/>
                        <hr style={{borderTop:'2px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills 
                        skill="HTML/Css"
                        progress={100}
                        />
                        <Skills 
                        skill="JavaScript"
                        progress={95}
                        />
                        <Skills 
                        skill="C#"
                        progress={80}
                        />
                        <Skills 
                        skill="ASP.NET core"
                        progress={90}
                        />
                        <Skills 
                        skill="ReactJs"
                        progress={50}
                        />
                        <Skills 
                        skill="node.js"
                        progress={50}
                        />
                        <Skills 
                        skill="PHP"
                        progress={60}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;