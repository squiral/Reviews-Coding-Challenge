import React, {Component} from 'react'
import WordTableRow from './WordTableRow'


class WordTable extends Component {


    render() {
        console.log("this.props.words", this.props.words.length)
        const words = this.props.words.map((word) => {
            return (
                <WordTableRow 
                text = {word.text}
                />
            )
        })

        return words
        
        }
    

}

export default WordTable