import React, {Component} from 'react'
import WordTableRow from './WordTableRow'
import './WordTable.css'


class WordTable extends Component {

    render() {
        console.log("this.props.words", this.props.words.length)
        const words = this.props.words.map((word, index) => {
            return (
                <WordTableRow 
                text = {word.text}
                frequency = {word.value}
                key = {index}
                />
            )
        })

        return (
            <table className = "word-table">
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Frequency</th>
                    </tr>
                </thead>
                <tbody>
                    {words}
                </tbody>
            </table>
        )

    }
    

}

export default WordTable