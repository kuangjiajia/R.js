import R from '../R/R'
import { render } from './render'

const RD = {
  render
}


// class Demo extends R.Component {
//   constructor() {
//     this.state = {
//       name: "zzx"
//     }
//   }
//   setState() {

//   }
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

const el = R.createElement


RD.render(
  el("div", { className: "kuangjiajia" },
    [el("div", { className: "zzxa" }, "zxadsad"),
    el("div", { className: "zzxa" }, "zxadsad")]),
  document.querySelector("#root")
)