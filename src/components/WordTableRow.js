import React, {Component} from 'react'
import './WordTable.css'


class WordTableRow extends Component {
    render() {
        return (
            <tr className = "row-component">
                <td>{this.props.text}</td>
                <td>{this.props.frequency}</td>
            </tr>
        )
    }
    
}

export default WordTableRow