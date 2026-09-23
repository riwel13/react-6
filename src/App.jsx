import PageBoard from './components/PageBoard/PageBoard'
import events from "./upcoming-events.json"
import './App.css'

function App() {
 

  return (
    <>
      <PageBoard cardsInfoArray={events}></PageBoard>
    </>
  )
}

export default App
