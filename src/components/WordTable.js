import React, {Component} from 'react'
import WordTableRow from './WordTableRow';

class WordTable extends Component {

     render() {

        const wordRowComponents = this.props.words.map(wordData => {
            return (
                <WordTableRow 
                word = {wordData}/>
            )
        })


        return (
            <table className="word-table">
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Frequency</th>
                    </tr>
                </thead>
                <tbody>
                    {wordRowComponents}
                </tbody>


            </table>
        )
    }
  

}




export default WordTable
