import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

export default class App extends Component {
  data = [
    {
      key: 'chicken',
      value: 'Chicken',
    },
    {
      key: 'tomatoes',
      value: 'Tomatoes',
    },
    {
      key: 'apples',
      value: 'Apples',
    },
    {
      key: 'salmon',
      value: 'Salmon',
    },
    {
      key: 'lettuce',
      value: 'Lettuce',
    },
  ]

  render() {
    return (
      <ReactSearchBox
        className="SearchBar"
        placeholder="What would you like to cook?"
        inputBoxBorderColor="white"
        inputBoxFontColor="orangered"
        inputBoxFontSize="14px"
        data={this.data}
        callback={record => console.log(record)}
      />
    )
  }
}