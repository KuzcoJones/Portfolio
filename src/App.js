import React from 'react';
import About from './sections/about'
import Contact from './sections/contact';
import Projects from './sections/projects'
import Hero from './sections/hero'
import Experience from './sections/experience'
import Layout from './components/layout'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary:  {main: '#1D3557', light: '#a8dadc', contrastText: '#ffffff' },
    secondary: {main: '#e3ba34', contrastText: '#000000'},
    typography: {main: 'Roboto', }
  }

})


function App() {
  return (
    <div className="App">
      <Layout>
        <ThemeProvider theme={theme}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </ThemeProvider>
      </Layout>
    </div>
  );
}

export default App;
