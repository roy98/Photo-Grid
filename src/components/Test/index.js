import React from 'react'
import { Image, Textinput, Button } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <Image field={props.fields.image_0} className="test-image"></Image>
      <div className="test-container1">
        <Textinput className="test-textinput"></Textinput>
        <Button field={props.fields.button_1622571137167} className="test-button"></Button>
        <Image field={props.fields.image_1623360483848} className="test-image1"></Image>
      </div>
    </div>
  )
}

Test.defaultProps = {
  'fields.image_0': 'src',
  fields: {},
  'fields.button_1622571137167': 'text',
  'fields.image_1623360483848': 'src',
}

Test.propTypes = {
  'fields.image_0': PropTypes.object,
  fields: PropTypes.object,
  'fields.button_1622571137167': PropTypes.string,
  'fields.image_1623360483848': PropTypes.object,
}

export default Test
