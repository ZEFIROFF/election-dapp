import CategoryCard from './CategoryCard';
import React from 'react'

const Content = ({CD1,CD2, vote}) => {
  const arrCD = [CD1, CD2]
  return (
    <div className="row d-flex my-5">
      <CategoryCard titleCategory="Main" voteF={vote} candidatesCategory={arrCD}/>
    </div>
  )
}

export default Content


// export default class content extends Component {

//     constructor(){
//         super()
//         this.state = {
//           isData: false,
//           groups: [],
//         }
//     }

//     componentDidMount(){
//       const groupOfCandidates = [
//         {category: "Forest", candidates: [
//           {fullName: "John", age: 38, desripition: "desripition man"},
//           {fullName: "Lena", age: 32, desripition: "desripition WOMAN MOMENT"},
//         ]}
//       ];
//       this.setState({groups: groupOfCandidates})
//     }

//   render() {
//     return (
//       <div className="row d-flex my-5">
//         {this.state.groups.map((categoryEl, index) => <CategoryCard key={index} titleCategory={categoryEl.category} candidatesCategory={categoryEl.candidates}/> )}
//       </div>
//     )
//   }
// }
// TSPK WSR