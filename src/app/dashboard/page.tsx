import React from 'react'
import Panel from './panel'
import Main from './Main'
import TaskComponent from './components/tasks/task'

export default function DashboardPage() {
  return (
    <div className='flex'>
        <Panel />
        <Main>
            <TaskComponent></TaskComponent>
        </Main>
    </div>
  )
}
