import React from 'react'
import Timestamp from '../Timestamp/Timestamp'
import config from '../../config'
import './Detail.scss'

/**
 * Displays a detailed fact
 * @param {Object} props An object with data for this component.
 * @param {Array} props.facts An array of cats facts.
 * @param {Object} props.facts[] A cat fact object.
 * @param {String} props.facts[].text The cat fact text.
 * @param {String} props.facts[].createdAt Timestamp of cat fact creation.
 * @param {Number} props.index List Item index on the List array. Just to get a different picture of it on Lorem Pixel (so they don't repeat)
 */
function Detail({facts, index}){
  const fact = facts[index]
  return (
    <section id="detail" className="detail">
      <img src={config.FULL_IMG_URL + (index+1)} alt="Cat"/>
      <h1><q>{fact.text}</q></h1>
      <Timestamp timestamp={fact.createdAt}/>
    </section>
  )
}

export default Detail
