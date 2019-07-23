import React, {Component} from 'react'
import WordTable from '../components/WordTable'

class ReviewsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {}

  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/Jordanddick/ef-coding-challenge/master/reviews.json"
    fetch(url)
    .then(res => res.json())
    .then((data) => { 
      const arrayOfStrings = this.flattenReviewsIntoSingleArray(data.reviews)
      const singleString = this.reduceArrayIntoSingleString(arrayOfStrings)
      const cleanSingleString = this.cleanSingleString(singleString)
      const arrayOfWords = this.splitStringIntoWords(cleanSingleString)
      const uncommonWords = this.removeCommonWords(arrayOfWords)
      const wordObject = this.wordsByFrequency(uncommonWords)
      const seperateWordObjects = this.seperateWordObjects(wordObject)
      this.setState({seperateWordObjects}
      )
    })
  }


  flattenReviewsIntoSingleArray (reviewArrays) {
    const singleArray = reviewArrays.reduce( function(accumulator, currentValue) {
      return accumulator.concat(currentValue);
    }, [] )

    return singleArray

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
    const commonWords = ["on", "was", "my", "did", "that", "the", "this", "if", "is", "a", "it", "and", "as", "but", "do", "does", "s", "i", "so", "to", "will", "you"]
    const uncommonWords = []

    for (const word of words) {
      if (!commonWords.includes(word)) {
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
    console.log("this.state:", this.state)
    return(
      <h1>Hello!</h1>
    )
  }
}


export default ReviewsContainer
