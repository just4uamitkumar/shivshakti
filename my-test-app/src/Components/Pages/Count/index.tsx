import { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>{'Count Component'}</h1>
        <span data-testid="count-value">{count}</span>
        <button onClick={() => setCount((count) => count + 1)} data-testID="increase-count-button">
          count is {count}
        </button>
      </div>
    </>
  )
}

export default Count
