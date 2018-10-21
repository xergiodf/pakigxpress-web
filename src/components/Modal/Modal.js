import React from 'react'
import PropTypes from 'prop-types'
import { HotKeys } from 'react-hotkeys'
import styled from 'styled-components'
import variables from '../../config/constants/theme'

const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 500;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${props => props.showBackdrop && props.backdropBackground};
  opacity: ${props => (props.visible ? 1 : 0)};
  pointer-events: ${props => (props.visible ? 'all' : 'none')};

  &:hover {
    outline: 0;
  }
`
ModalOverlay.displayName = 'ModalOverlay'

const ModalContent = styled.div`
  position: relative;
  background: ${variables.colors.white};
  border-radius: ${variables.base.radiusSmall}px;
  padding: ${variables.base.gutter}px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  width: ${props => () => {
    if (props.width) return `${props.width}px`
    if (props.size === 'large') return '800px'
    if (props.size === 'small') return '300px'
    return '450px'
  }};
`
ModalContent.displayName = 'ModalContent'

class Modal extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    visible: PropTypes.bool,
    closeKeys: PropTypes.arrayOf(PropTypes.string),
    onRequestToClose: PropTypes.func,
    cancellable: PropTypes.bool,
    showBackdrop: PropTypes.bool,
    backdropBackground: PropTypes.string,
  }

  static defaultProps = {
    size: 'medium',
    children: null,
    visible: false,
    closeKeys: ['esc'],
    onRequestToClose: null,
    cancellable: true,
    showBackdrop: true,
    backdropBackground: 'rgba(0, 0, 0, 0.5)',
  }

  get keysActions() {
    return {
      requestToClose: this.props.closeKeys,
    }
  }

  get keysHandlers() {
    return {
      requestToClose: () => this.handleRequestToClose(),
    }
  }

  handleRequestToClose = () => {
    const { cancellable, onRequestToClose } = this.props
    return cancellable && onRequestToClose && onRequestToClose()
  }

  handleContentPress = e => e.stopPropagation()

  render() {
    const { children } = this.props
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { visible: this.props.visible })
    )

    return (
      <ModalOverlay
        tabIndex={1}
        onClick={this.handleRequestToClose}
        {...this.props}
      >
        <HotKeys keyMap={this.keysActions} handlers={this.keysHandlers}>
          <ModalContent {...this.props} onClick={this.handleContentPress}>
            {childrenWithProps}
          </ModalContent>
        </HotKeys>
      </ModalOverlay>
    )
  }
}

export default Modal
