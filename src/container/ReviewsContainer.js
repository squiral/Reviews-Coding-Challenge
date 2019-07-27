import React, {Component, Fragment} from 'react'
import WordCloud from 'react-d3-cloud'

import WordTable from '../components/WordTable'

class ReviewsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      words: []
    }

  }

  componentDidMount() {     
    const data = require('../reviews.json')
    // console.log("Start of componentDidMount", data)
    const singleString = this.reduceArrayIntoSingleString(data.reviews)
    const cleanSingleString = this.cleanSingleString(singleString)
    const arrayOfWords = this.splitStringIntoWords(cleanSingleString)
    const uncommonWords = this.removeCommonWords(arrayOfWords)
    const wordObject = this.wordsByFrequency(uncommonWords)
    const words = this.seperateWordObjects(wordObject)
    this.setState({words})
    console.log("end of componentDidMount", this.state.words)
      
  }
  

  reduceArrayIntoSingleString (arrayOfStrings) {
    const singleString = arrayOfStrings.join(' ')

    return singleString

  }

  cleanSingleString(string) {
    const cleanString = string
      .replace(/[^A-Za-z]/g, ' ')
      .replace(/\s+/g, ' ')
      .toLowerCase()

    return cleanString

  }

  splitStringIntoWords(string) {
    const words = string.split(' ')

    return words

  }

  removeCommonWords(words) {
    const stopWords = require('../stopwords.js')
    const uncommonWords = []

    console.log(stopWords)

    for (const word of words) {
      if (!stopWords.default.includes(word)) {
        uncommonWords.push(word)
      }
    }

    return uncommonWords

  }

  wordsByFrequency(words) {
    const wordsByFrequency = {};

    for (const word of words) {
      if (wordsByFrequency[word]) {
        wordsByFrequency[word] += 1;
      }
      else {
            wordsByFrequency[word] = 1;
          }
    }

    return wordsByFrequency

  }

  seperateWordObjects(wordObject) {
    const words = Object.keys(wordObject)
    const arrayOfWordObjects = []

    for (const word of words) {
      const individualWordObject = 
        {
          text: word,
          value: wordObject[word]
        }
      
      arrayOfWordObjects.push(individualWordObject)
      
    }

    return arrayOfWordObjects

  }

  


  render() {
    console.log("this.state.words:", this.state.words)
    const fontSizeMapper = word => Math.log2(word.value) * 50;
    return(
      <Fragment>
        <WordTable words={this.state.words} />
        <WordCloud data={this.state.words} fontSizeMapper={fontSizeMapper}/>
      </Fragment>
    )
  }
}


export default ReviewsContainer
