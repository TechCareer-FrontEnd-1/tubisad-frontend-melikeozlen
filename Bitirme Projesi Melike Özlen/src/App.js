import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import CopyRight from './components/CopyRight/CopyRight'
import Counter from './components/Counter/Counter'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Project/Project'
import Techonology from './components/Techonology/Techonology'
import TodoList from './components/TodoList/TodoList'
import TodoNew from './components/TodoList/TodoNew'
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Techonology />
      <TodoNew />
      {/* <TodoList/> */}
      <AboutMe />
      <Project />
      <Counter />
      <Contact />
      <CopyRight />
    </>
  )
}

export default App