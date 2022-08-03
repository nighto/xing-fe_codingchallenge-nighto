import React from 'react'
import Timestamp from '../Timestamp/Timestamp'
import config from '../../config'
import './ListItem.scss'

/**
 * 
 * @param {String} str String to be truncated
 * @param {Number} size Size for the string to be truncated
 * @param {String} delimiter Delimiter for the string, defaults as "…"
 */
function truncate(str, size, delimiter) {
  size = size || 40
  delimiter = delimiter || '…'

  if (str.length <= size) {
    return str
  }

  if (str[size - 1] === ' ') {
    return str.substr(0, size - 1) + delimiter
  }

  return str.substr(0, size) + delimiter
}

/**
 * Displays a List item.
 * @param {Object} props An object with data for this component.
 * @param {Object} props.item A List Item to be displayed.
 * @param {String} props.item.text The cat fact text.
 * @param {String} props.item.createdAt Timestamp of cat fact creation.
 * @param {Number} props.index List Item index on the List array. Just to get a different picture of it on Lorem Pixel (so they don't repeat)
 * @param {Number} props.selectedFactId The ID of the fact that has been selected by user
 * @param {Function} props.handleFactChange
 */
function ListItem({item, index, selectedFactId, handleFactChange}) {
  let className = 'list-item'
  if (index === selectedFactId) {
    className += ' selected'
  }
  return <div className={className} onClick={e => handleFactChange(index, e)}>
    <img src={config.THUMB_IMG_URL + (index+1)} alt="Cat"/>
    <h2>{truncate(item.text)}</h2>
    <Timestamp timestamp={item.createdAt}/>
  </div>
}

export default ListItem
