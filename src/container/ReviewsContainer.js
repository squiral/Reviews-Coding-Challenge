import React, {Component} from 'react'

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
      const singleString = this.reduceIntoSingleString(arrayOfStrings)
      const cleanSingleString = this.cleanReviewString(singleString)
      this.setState({cleanSingleString}
      )
    })
  }


  flattenReviewsIntoSingleArray (reviewArrays) {
    const singleArray = reviewArrays.reduce( function(accumulator, currentValue) {
      return accumulator.concat(currentValue);
    }, [] )

    return singleArray

  }

  reduceIntoSingleString (arrayOfStrings) {
    const singleString = arrayOfStrings.join(' ')

    return singleString
  }

  cleanReviewString(string) {

    const cleanString = string.replace(/[^A-Za-z0-9]/g, ' ')
    .toLowerCase()
    return cleanString
  }


  render() {
    console.log(this.state)
    return(
      <h1>Hello World!</h1>
    )
  }
}


export default ReviewsContainer
