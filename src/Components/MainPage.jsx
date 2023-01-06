import React from 'react'
import MiniDrawer from './HeaderAndSideBar.js';

function MainPage() {
  
  return (
    <div>
        <MiniDrawer/>
    </div>
  )
}

export default MainPage

// import React from 'react'
// import {  Navigate, Route, Routes } from 'react-router-dom';
// import MiniDrawer from './HeaderAndSideBar.js';
// import PageNotFound from './PageNotFount.jsx';

// function MainPage() {
//   return (
//     <div>
//         <Routes>
//         <Route exact path="/home" element={<MiniDrawer passPage="home"/>} />
//         <Route exact path="/citationgenerator" element={<MiniDrawer passPage="citationgenerator"/>} />
//         <Route exact path="/cowriter" element={<MiniDrawer passPage="cowriter"/>} />
//         <Route exact path="/contactus" element={<MiniDrawer passPage="contactus"/>} />
//         <Route exact path="/grammerchecker" element={<MiniDrawer passPage="grammerchecker"/>} />
//         <Route exact path="/helpcenter" element={<MiniDrawer passPage="helpcenter"/>} />
//         <Route exact path="/paraphraser" element={<MiniDrawer passPage="paraphraser"/>} />
//         <Route exact path="/plagiarismchecker" element={<MiniDrawer passPage="plagiarismchecker"/>} />
//         <Route exact path="/summarizer" element={<MiniDrawer passPage="summarizer"/>} />
//         <Route exact path="/upgrade" element={<MiniDrawer passPage="upgrade"/>} />
//         <Route path="/" element={<Navigate to="/home" replace/>}/>
//         {/* <Route path="/favorite/Action" element={<Action/>}/> */}
//         <Route element={<PageNotFound/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default MainPage