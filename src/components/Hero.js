import React, { useState } from 'react'
import styled from 'styled-components'
import TaskManager from './TaskManager'
const HeroContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100vh;
 height: 100vh;
`
const Logo = styled.a`
 color: #333;
 text-decoration: none;
 font-size: 1.5rem;
 cursor: pointer;
`

const Overlay = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.5);
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 999;
`

const OverlayContent = styled.div`
 background-color: #fff;
 padding: 2rem;
 border-radius: 0.25rem;
 width: 100vh;
 height: 50vh;
`
const OverlayHeader = styled.h2`
 margin-top: 0;
`

const OverlayBody = styled.p`
 margin-bottom: 2rem;
`

const OverlayButton = styled.button`
 padding: 0.5rem 1rem;
 border: none;
 background-color: #333;
 color: #fff;
 font-size: 1rem;
 cursor: pointer;
`

const Navbar = styled.nav`
 background-color: #007bff;
 color: #fff;
 display: flex;
 justify-content: space-between;
 padding: 10px 20px;
 font-size: 18px;
 .logo {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #333;
 }

 .logo:hover {
  background-color: #444;
  cursor: pointer;
 }
 div a {
  color: #333;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #f0f0f0;
  transition: background-color 0.2s ease-in-out;
  font-size: 16px;
 }

 div a:hover {
  background-color: #e0e0e0;
  color: #fff;
  cursor: pointer;
 }
`

const Main = styled.main`
 flex: 1;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

const Footer = styled.footer`
 background-color: #333;
 color: #fff;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 60px;
`
const AddTaskButton = styled.button`
 background-color: #007bff;
 color: #fff;
 border: none;
 border-radius: 0.25rem;
 padding: 0.5rem 1rem;
 font-size: 1rem;
 cursor: pointer;
 transition: background-color 0.2s ease-in-out;
 margin-top: 2rem;

 &:hover {
  background-color: #0062cc;
 }
`

const TaskList = styled.ul`
 list-style: none;
 padding: 0;
 width: 100%;

 & > li {
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  & > div {
   margin-bottom: 0.5rem;
   font-weight: bold;

   & > strong {
    margin-right: 0.5rem;
   }
  }

  & > button {
   background-color: #dc3545;
   color: #fff;
   border: none;
   border-radius: 0.25rem;
   padding: 0.5rem 1rem;
   font-size: 1rem;
   margin-top: auto;
   cursor: pointer;
   transition: background-color 0.2s ease-in-out;

   &:hover {
    background-color: #c82333;
   }

   &:first-of-type {
    background-color: #ffc107;

    &:hover {
     background-color: #e0a800;
    }
   }
  }
 }
`
const Hero = () => {
 const [isOverlayOpen, setIsOverlayOpen] = useState(true)

 const [tasks, setTasks] = useState([])
 const [client, setClient] = useState('')
 const [issue, setIssue] = useState('')
 const [serviceType, setServiceType] = useState('')
 const [dateTime, setDateTime] = useState('')
 const [comments, setComments] = useState('')
 const [attachments, setAttachments] = useState([])
 const [progress, setProgress] = useState('')
 const [status, setStatus] = useState('')

 const handleEditTask = (index) => {
  const task = tasks[index]
  setClient(task.client)
  setIssue(task.issue)
  setServiceType(task.serviceType)
  setDateTime(task.dateTime)
  setComments(task.comments)
  setAttachments(task.attachments)
  setProgress(task.progress)
  setStatus(task.status)
  handleDeleteTask(index)
 }
 const handleDeleteTask = (index) => {
  const updatedTasks = [...tasks]
  updatedTasks.splice(index, 1)
  setTasks(updatedTasks)
 }

 const handleLogoClick = () => {
  setIsOverlayOpen(true)
 }

 const handleCloseClick = () => {
  setIsOverlayOpen(false)
 }
 return (
  <HeroContainer>
   <Navbar>
    {isOverlayOpen && (
     <Overlay>
      <OverlayContent>
       <OverlayHeader>Overlay Header</OverlayHeader>

        <h2>Tasks</h2>
   <uTaskList>
    {tasks.map((task, index) => (
     <li key={index}>
      <div>
       <strong>Client:</strong> {task.client}
      </div>
      <div>
       <strong>Issue:</strong> {task.issue}
      </div>
      <div>
       <strong>Service Type:</strong> {task.serviceType}
      </div>
      <div>
       <strong>Date/Time:</strong> {task.dateTime}
      </div>
      <div>
       <strong>Comments:</strong> {task.comments}
      </div>
      <div>
       <strong>Attachments:</strong> {task.attachments.length}
      </div>
      <div>
       <strong>Progress:</strong> {task.progress}
      </div>
      <div>
       <strong>Status:</strong> {task.status}
      </div>
      <AddTaskButton onClick={() => handleEditTask(index)}>Edit</AddTaskButton>
      <AddTaskButton onClick={() => handleDeleteTask(index)}>
       Delete
      </AddTaskButton>
     </li>
    ))}
   </uTaskList>
       <OverlayButton onClick={handleCloseClick}>Close</OverlayButton>
      </OverlayContent>
     </Overlay>
    )}

    <Logo className="logo" href="/" onClick={handleLogoClick}>
     Logo
    </Logo>

    <div>
     <a href="/">Link 1</a>
     <a href="/">Link 2</a>
     <a href="/">Link 3</a>
    </div>
   </Navbar>
   <Main>
    <TaskManager />
   </Main>
   <Footer>&copy; 2023 My Website</Footer>
  </HeroContainer>
 )
}

export default Hero
