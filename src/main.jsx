import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <MantineProvider>
      <StrictMode>
          <App />
      </StrictMode>,
  </MantineProvider>
)
