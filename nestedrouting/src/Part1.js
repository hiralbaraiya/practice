import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import User1 from './User1';
import User2 from './User2';
import User3 from './User3';
import User4 from './User4';
import Sidebar from './Sidebar';
import './css/Style.css';

const User = ({ match }) => <p>{match.params.id}</p>

class Part2 extends Component {
    render() {
       let  obj={float:'center'}
        return (<div>
            <div class="head">
               <h1 style={obj}> <Route path="/part1/:id" component={User} /></h1>
            </div>
            <div class="row">
                <div class="col-3 col-s-3 menu">
<Sidebar/>
                </div>
                <div class="col-6 col-s-9">
                    <Route path="/part1/user1" component={User1} />
                    <Route path="/part1/user2" component={User2} />
                    <Route path="/part1/user3" component={User3} />
                    <Route path="/part1/user4" component={User4} />
                </div>
            </div>
        </div>
        );
    }
}

export default Part2;
