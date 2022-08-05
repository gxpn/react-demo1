import { createRoot } from 'react-dom/client'
import { Button } from './Button'
import H1 from './H1'

createRoot(document.querySelector('#root')).render(
  <>
    <Button></Button>
    <H1></H1>
  </>
)
