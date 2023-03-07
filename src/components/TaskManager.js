import React, { useState } from 'react'
import styled from 'styled-components'

const TaskManagerContainer = styled.div`
 display: grid;
 flex-direction: column;
 align-items: center;
 margin-bottom: 2rem;
`

const TaskForm = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 100%;
 margin-top: 2rem;
`

const FormInputContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin-bottom: 1rem;
 width: 100%;

 & > label {
  font-weight: bold;
  margin-bottom: 0.5rem;
 }

 & > input[type='text'],
 & > textarea,
 & > select {
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  margin-top: 0.5rem;
 }

 & > input[type='file'] {
  margin-top: 0.5rem;
 }
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

const TaskManager = () => {
 const [tasks, setTasks] = useState([])
 const [client, setClient] = useState('')
 const [issue, setIssue] = useState('')
 const [serviceType, setServiceType] = useState('')
 const [dateTime, setDateTime] = useState('')
 const [comments, setComments] = useState('')
 const [attachments, setAttachments] = useState([])
 const [progress, setProgress] = useState('')
 const [status, setStatus] = useState('')

 const handleAttachmentChange = (e) => {
  const files = e.target.files
  setAttachments(files)
 }

 const handleAddTask = () => {
  const newTask = {
   client,
   issue,
   serviceType,
   dateTime,
   comments,
   attachments,
   progress,
   status,
  }
  setTasks([...tasks, newTask])
  setClient('')
  setIssue('')
  setServiceType('')
  setDateTime('')
  setComments('')
  setAttachments([])
  setProgress('')
  setStatus('')
 }

 const handleDeleteTask = (index) => {
  const updatedTasks = [...tasks]
  updatedTasks.splice(index, 1)
  setTasks(updatedTasks)
 }

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
 return (
  <TaskManagerContainer>
   <h2>Add Task</h2>
   <TaskForm onSubmit={(e) => e.preventDefault()}>
    <FormInputContainer>
     <label htmlFor="client">Client:</label>
     <input
      type="text"
      id="client"
      value={client}
      onChange={(e) => setClient(e.target.value)}
     />
    </FormInputContainer>
    <FormInputContainer>
     <label htmlFor="issue">Issue:</label>
     <textarea
      id="issue"
      value={issue}
      onChange={(e) => setIssue(e.target.value)}
     ></textarea>
    </FormInputContainer>
    <FormInputContainer>
     <label htmlFor="serviceType">Service Type:</label>
     <input
      type="text"
      id="serviceType"
      value={serviceType}
      onChange={(e) => setServiceType(e.target.value)}
     />
    </FormInputContainer>
    <FormInputContainer>
     <label htmlFor="dateTime">Date/Time:</label>
     <input
      type="datetime-local"
      id="dateTime"
      value={dateTime}
      onChange={(e) => setDateTime(e.target.value)}
     />
    </FormInputContainer>
    <FormInputContainer>
     <label htmlFor="comments">Comments:</label>
     <textarea
      id="comments"
      value={comments}
      onChange={(e) => setComments(e.target.value)}
     ></textarea>
    </FormInputContainer>
    <FormInputContainer>
     <label htmlFor="attachments">Attachments:</label>
     <input
      type="file"
      id="attachments"
      multiple
      onChange={handleAttachmentChange}
     />
    </FormInputContainer>
    <FormInputContainer>
     <label htmlFor="progress">Progress:</label>
     <input
      type="number"
      id="progress"
      value={progress}
      onChange={(e) => setProgress(e.target.value)}
     />
    </FormInputContainer>
    <FormInputContainer>
     <label htmlFor="status">Status:</label>
     <select
      id="status"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
     >
      <option value="">--Select a Status--</option>
      <option value="open">Open</option>
      <option value="in progress">In Progress</option>
      <option value="closed">Closed</option>
     </select>
    </FormInputContainer>
    <AddTaskButton onClick={handleAddTask}>Add Task</AddTaskButton>
   </TaskForm>

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
  </TaskManagerContainer>
 )
}

export default TaskManager
