import {
  REACT_ELEMENT_TYPE
} from './types'

const createElement = function (type, config, children) {
  let props = {}
  Object.keys(config).forEach(prop => props[prop] = config[prop])

  let childrenLen = children.length
  if (childrenLen === 1) {
    props.Children = children[0]
  } else[
    props.Children = children
  ]

  return ReactElement(
    type,
    props,
  );
}

const ReactElement = (type, props) => {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    props: props,
  }
  return element
}


export {
  createElement
}
