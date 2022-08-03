import React from 'react'
import Moment from 'react-moment'
import './Timestamp.scss'

/**
 * Displays item creation time
 * @param {Object} props Object with properties for this component
 * @param {String} props.timestamp Timestamp to be formatted and displayed
 */
function Timestamp({timestamp}){
  return <p className="timestamp">Created at: <Moment format="LLL">{timestamp}</Moment></p>
}

export default Timestamp
