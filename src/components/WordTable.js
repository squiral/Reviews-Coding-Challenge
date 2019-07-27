import React, {Component, Fragment} from 'react'
import WordTableRow from './WordTableRow'


class WordTable extends Component {


    render() {

            const rowComponents = this.props.words.map(word, index => {
                return (
                    <WordTableRow 
                    id={index}
                    word={wordData.text}
                    frequency={wordData.value}/>
                )
            })


            return (
                <Fragment>
                    <ul>
                        {rowComponents}
                    </ul>
                </Fragment>
            )
        }
    

}

export default WordTable