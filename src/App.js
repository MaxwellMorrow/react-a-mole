import { useState } from 'react'
import MoleContainer from './components/MoleContainer'

function App(){
  // use state hook 
    let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
          // with this simple for loop we are pushing 9 mole containers into our hills array 
            hills.push(
                <MoleContainer
                // these are our props for the moleContainer key, a setscore usestate, and the score itself 
                key={i}
                setScore={setScore}
                score={score} />
            )
        }
    
        return (
            <div>
              {/* here we are rendering the hills array, im not sure how this works maybe a scoping issue */}
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>React-a-Mole!</h1>
            {score}
            {createMoleHill()}
        </div>
    )
}

export default App
