import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914_960_720.png" 
                        alt="avatar" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | JavaScript | React | React Native| NodeJS | PHP | ASP.NET core</p>
                            <div className="social-links">
                                {/*LinkedIn */}
                                <a href="https://www.linkedin.com/in/fatima-johora " rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/*Github */}
                                <a href="https://github.com/Fjohora9333 " rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;