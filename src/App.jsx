import React from "react"
import MoreDetail from "./component/MoreDetail"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detailpage from "./component/Detailpage"

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<MoreDetail/>}/>
          <Route path="/detail/:id" element={<Detailpage/>}/>

        </Routes>
    </>
  )
}

export default App
