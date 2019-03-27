import React, {Component} from 'react';
import {Link} from 'react-router'


class Home extends Component {
render(){
    return(
        <div>
            <Link to ={'/app'}></Link>
        </div>
    )
}
}

export default Home