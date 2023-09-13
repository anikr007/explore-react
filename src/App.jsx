
import './App.css'
import Friends from './Friends'
import Users from './Users'
import Counter from './counter'
import Team from './team'

function App() {

  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>

      <h1>Vite + React</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('third clicked') }}>third</button>
      <button onClick={() => addToFive(3)}>Four</button>

    </>
  )
}

export default App
