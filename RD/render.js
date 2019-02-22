const render = function (jsx, root) {
  let vDom
  if (typeof jsx === "string") {
    vDom = ksxToObj(jsx)
  } else {
    vDom = jsx
  }
  console.log(vDom)
  const vRoot = createVDom(vDom)
  root.appendChild(vRoot)
}


function createVDom(vDom) {
  const {
    props,
    type,
  } = vDom
  const vRoot = document.createElement(type)
  Object.keys(props).forEach(prop => {
    if (prop === "className") {
      vRoot.setAttribute("class", props[prop])
    } else if (prop === "Children") {
      const { Children } = props
      if (typeof Children === "string") {
        vRoot.appendChild(document.createTextNode(Children))
      } else if (Children instanceof Array) {
        Object.keys(Children).forEach(prop => {
          if (typeof Children[prop] === "string") {
            vRoot.appendChild(document.createTextNode(Children))
          } else {
            vRoot.appendChild(createVDom(Children[prop]))
          }
        })
      } else {
        vRoot.appendChild(createVDom(Children))
      }
    }
    else {
      vRoot.setAttribute(prop, props[prop])
    }
  })

  return vRoot
}



export {
  render,
  createVDom
}
