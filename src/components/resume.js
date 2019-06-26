import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>Left</Cell>
                    <Cell className="resume-right-col" col={8}>Right</Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;