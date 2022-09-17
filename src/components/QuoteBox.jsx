import React from 'react'
import Button from './Button'

const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {

  const colorObj = {
    color: randomColor
  }

  return (
    <article style={colorObj} className='card'>
      <i class="card__icon fa-sharp fa-solid fa-quote-left"></i> 
      <p className='card__quote'>{randomQuote.quote}</p>
      <h1 className='card__author'>{randomQuote.author}</h1>
      <Button 
      randomColor={randomColor}
      getRandomAll={getRandomAll}
      />
    </article>
  )
}

export default QuoteBox