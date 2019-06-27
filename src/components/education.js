import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                    <ui>
                        <li>{this.props.courseItem1}</li>
                        <li>{this.props.courseItem2}</li>
                        <li>{this.props.courseItem3}</li>
                        <li>{this.props.courseItem4}</li>
                        <li>{this.props.courseItem5}</li>
                        <li>{this.props.courseItem6}</li>
                    </ui>
                </Cell>
            </Grid>
        )
    }
}

export default Education;