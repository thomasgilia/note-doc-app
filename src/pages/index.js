import React from "react"
// import { graphql } from "gatsby"
import HomepageLayout from "../components/homepage"

export default function Home() {
  
  return(
    <HomepageLayout/>
    ) 
 
}


//-------------------------------------------------------------------------------------------------------------------

// // import axios from "axios"
// import React from "react"
// import HomepageLayout from "../components/homepage"
// // import Axios from "axios"

// export default function Home() {
  
//   return(
//     <HomepageLayout>dkdkdk</HomepageLayout>
//     ) 
 
// }

// //gatsby starter index

// import React from "react"
// import Homepage from "../components/homepage"

// import { firestore } from "../../firebase.js"
// export default function Home({ data }) {
//   return (
//     <Homepage>
//       <>

//         <Header>
//           Because life is too short to <i>not</i> go bananas
//         </Header>
//         <br></br>
//         <DiscussionLayout>
//           <h5>Bananas are a good source of fiber, several vitamins and minerals, and have a surprising amount of
//           protein. They are also inexpensive and readily available. No worries for vegans, gluten or milk
//           allergies, etc. Watch out though - frozen banana treats are surprisingly addictive and are not low carb.</h5>
//           <br></br>

//         </DiscussionLayout>

//         <div class="row">
//           {data.allContentfulRecipes.nodes.map((node, index) => (
//             <div class="col-md-4">
//               <div class="card mb-4 box-shadow-sm">
//                 <img class="card-img-top img-fluid" src={node.photo[0].file.url} alt={node.photo[0].file.fileName} data-holder-rendered="true" width="100%"
//                   height="225" preserveAspectRatio="xMidYMid slice" focusable="false" />
//                 <div class="card-body">
//                   <h5 class="card-title">{node.title}</h5>
//                   <a href={node.title} class="btn btn-warning" >Go to Recipe</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </>

//       {/*        <Header qwerty={data.allContentfulRecipes.nodes[1].title}/>
//       <Header qwerty="qwerty"/>
//       these two lines work as examples to send info over to header component (which accesses it as param by this line in header file
//         export default function Header({ children, qwerty }) {
//         */}
//     </AllPagesLayout>
//   )
// }
