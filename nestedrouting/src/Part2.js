import React, { Component } from 'react';
import { Route,NavLink } from 'react-router-dom';
import User1 from './User1';
import User2 from './User2';
import User3 from './User3';
import User4 from './User4';
import Image1 from './imagedetails/Image1';
import Image2 from './imagedetails/Image2';
import Image3 from './imagedetails/Image3';
import Image4 from './imagedetails/Image4';
import './css/Style.css';

const User = ({ match }) => <p>{match.params.id}</p>

class Part2 extends Component {
    render() {
       let  obj={float:'center'}
        return (<div>
            <div class="head">
               <h1 style={obj}> <Route path="/part2/:id" component={User} /></h1>
            </div>
            <div class="row">
                <div class="col-3 col-s-3 menu">

                    <ul>
                    <li ><NavLink to="/part2/user1" style={{textDecoration:'none'}}>User1</NavLink></li>
                        <li ><NavLink to="/part2/user2" style={{textDecoration:'none'}}>User2</NavLink></li>
                        <li><NavLink to="/part2/user3" style={{textDecoration:'none'}}>User3</NavLink></li>
                        <li><NavLink to="/part2/user4" style={{textDecoration:'none'}}>User4</NavLink></li>
                    </ul>

                </div>
                <div class="col-6 col-s-9">
                    <Route path="/part2/user1" component={User1} />
                    <Route path="/part2/user2" component={User2} />
                    <Route path="/part2/user3" component={User3} />
                    <Route path="/part2/user4" component={User4} />
                </div>
                <div class="col-3 col-s-12">
                    <div class="aside">
                        <Route path="/part2/user1" component={Image1} />
                        <Route path="/part2/user2" component={Image2} />
                        <Route path="/part2/user3" component={Image3} />
                        <Route path="/part2/user4" component={Image4} />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Part2;
