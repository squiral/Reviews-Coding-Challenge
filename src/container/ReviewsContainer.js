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
    .then((data) => { this.setState({reviews: data})
    })
  }


  render() {
    console.log(this.state)
    return(
      <h1>Hello World!</h1>
    )
  }
}


export default ReviewsContainer
