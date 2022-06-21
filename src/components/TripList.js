import { useState, useEffect, useCallback } from "react"
import { useFetch } from "../hooks/useFetch"
// styles
import './TripList.css'

export default function TripList() {
  const [url, setUrl] = useState('http://localhost:3000/trips')
  const { data: trips } = useFetch(url)

  return (
    <div className="trip-list">
      <h2>Tripp Listt</h2>
      <ul>
        {trips && trips.map(trip => ( // at the beginnig, data is null so map will cause error. only map if trips is not null
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>
          European trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')} >
          All trips
        </button>
      </div>
    </div >
  )
}
