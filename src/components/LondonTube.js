import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function LondonTube() {
  const [lines, setLines] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    getTubeData()
    console.log(lines)
  }, [])

  function getTubeData() {
    axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
      .then(res => setLines(res.data))
      .catch(err => setError(err.message))
  }

  return (
    <div className="tube">
      <h2 className="tubeLine">Tube status</h2>
      <ul>
        {lines &&
          lines.map(line => {
            return <li key={line.id}>
              <p>{line.name} - {line.lineStatuses[0].statusSeverityDescription}</p>
            </li>
          })
        }
      </ul>
    </div>
  )
}
