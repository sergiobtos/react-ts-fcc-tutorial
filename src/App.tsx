import { TodoList, AddTodo } from './components'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Toaster position='bottom-center'/>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
