import React from 'react'

import { MyFancyButton } from 'my-fancy-button'
import 'my-fancy-button/dist/index.css'

const App = () => {
  return (
    <div style={{ justifyContent: 'space-between', padding: 10, display: 'flex'}}>
      <MyFancyButton onClick={() => console.log('Default')} text="Default" />
      <MyFancyButton onClick={() => console.log('Primary')} text="Primary" type="primary" />
      <MyFancyButton onClick={() => console.log('Danger')} text="Danger" type="danger" />
      <MyFancyButton onClick={() => console.log('Disabled')} text="Disabled" type="disabled" disabled />
    </div>
  )
}

export default App
