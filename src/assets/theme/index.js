import { createMuiTheme } from '@material-ui/core/styles'
import overrides from './components'

export default createMuiTheme({
  palette: {
    primary: {
      light: '#FFFFFF',
      main: '#FFDD00',
      dark: '#FFCC00',
      contrastText: '#0F265C'
    },
    secondary: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#0F265C',
      contrastText: '#0F265C'
    }
  },
  status: {
    danger: '#FFDD00'
  },
  overrides
})
