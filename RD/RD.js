import R from '../R/R'
import render from './render'

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



RD.render(
  R.createElement("div", {
    className: "kuangjiajia"
  },
    R.createElement("div", {
      className: "zzxa"
    }, "zxadsad"),
    R.createElement("div", {
      className: "zzxa"
    }, "zxadsad")), document.querySelector("#root"))