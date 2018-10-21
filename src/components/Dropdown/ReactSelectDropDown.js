import React, { Component } from 'react'
import Select from 'react-select'

class ReactSelectDropDown extends Component {
  onChange(event) {
    if (this.props.input.onChange && event != null) {
      this.props.input.onChange(event.value)
    } else {
      this.props.input.onChange(null)
    }
  }

  render() {
    const { input, options, name, id, ...custom } = this.props
    return (
      <Select
        {...input}
        {...custom}
        id={id}
        name={name}
        options={options}
        value={this.props.input.value || ''}
        onBlur={() => this.props.input.onBlur(this.props.input.value)}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}

export default ReactSelectDropDown
