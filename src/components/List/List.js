import React from 'react'
import ListItem from './ListItem'
import './List.scss'

/**
 * Display a list of cat data.
 * @param {Object} props An object with data for this component.
 * @param {Array} props.facts An array of cats facts.
 * @param {Object} props.facts[] A cat fact object.
 * @param {String} props.facts[].text The cat fact text.
 * @param {String} props.facts[].createdAt Timestamp of cat fact creation.
 * @param {Number} props.selectedFactId The ID of the fact that has been selected by user.
 * @param {Function} props.handleFactChange Function to change selected fact
 */
function List({facts, selectedFactId, handleFactChange}) {
  if (!facts) {
    return null
  }
  return (
    <nav id="list" className="list">
      {facts.length === 0 ?
        <p className="emptylist">No list item matches your filter.</p> :
        facts.map((fact, index) => <ListItem key={index} item={fact} index={index} selectedFactId={selectedFactId} handleFactChange={handleFactChange}/>)
      }
    </nav>
  )
}

export default List
