import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Fatima Johora</h2>
                        <img src={require('../IMG_20180818_225220.JPG')} alt="Fatima Johora" style={{height: '250px'}}/>
                        <p style={{width:'75%' , margin:'auto', paddingTop:'1em'}}>fjkjsksdffdfdff dfhsjfhsk </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton',fontSize:'25px'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    226-972-2927
                                </ListItemContent>
                            </ListItem>
                           
                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton',fontSize:'25px'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    ftzisa@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton',fontSize:'25px'}}>
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                    https://github.com/Fjohora9333
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton',fontSize:'25px'}}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />www.linkedin.com/in/fatima-johora 
                                </ListItemContent>
                            </ListItem>

                        </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
