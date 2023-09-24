import axios from 'axios'

export default async function TaskComponent() {

  const {TASK_URL} = process.env;

  const res = await axios.get(`${TASK_URL}/tasks`)

  const tasks = res.data

  console.log(tasks)

  return (
    <div>
      <h1>{tasks}</h1>
    </div>
  )
}
