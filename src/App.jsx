
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'


function App() {

  function handleClick() {
    alert('button clicked')
  }

  function handleClick2() {
    alert('clicked Button')
  }

  const addToFive =(num) =>{
    alert(num + 5)
  }



  return (
    <>
      <h1>React Core Concepts 2</h1>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button> <br />

      <button onClick={handleClick2}>Check Me</button><br />

      <button onClick={() => { alert('third button') }}>Third Clicked</button><br />

      <button onClick={addToFive}>Four button</button>

    </>
  )
}

export default App
