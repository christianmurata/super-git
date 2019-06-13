import React, {Component} from "react"
import axios from "axios"
import Clock from "../../components/clock"

import "./style.css"

class Main extends Component {
    state = {
        data: []
    }

    componentDidMount(){
        axios.get("https://api.github.com/users/christianmurata/repos").then(
            (result) => {
                this.setState({
                    data: result.data
                })
            }
        );
    }

    render(){
        return (
            <>
                <h1> Super Git </h1>
    
                <Clock></Clock>
    
                <ul>
                    {this.state.data.map((item) => 
                        <li>
                            <span> {item.name} </span>
                            <span> {item.description} </span>
                            <a href={item.html_url}>{item.html_url}</a> 
                        </li>)
                    }
                </ul>
            </>
        );
    }
};

export default Main;