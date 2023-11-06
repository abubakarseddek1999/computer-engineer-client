import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import { useMap } from 'react-leaflet'


function MyComponent() {
  const map = useMap()
  console.log('map center:', map.getCenter())
  return null
}

function MyMapComponent() {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <MyComponent />
    </MapContainer>
  )
}
export default MyMapComponent;