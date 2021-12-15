
import { BrowserRouter as Router } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { createContext, useState } from "react";

// Components
import Homepage from "./pages/Homepage";
import Login from "./pages/Login"

export const ThemeContext = createContext()
function App() {
  const [theme, setTheme] = useState('light')
  const [style, setStyle] = useState({ bg: 'bg-white', text: 'text-white' })

  const toggleTheme = (theme) => {
    setTheme(theme)
    theme === 'dark'? setStyle({bg:'bg-black', text:'text-white'}) : setStyle({bg:'bg-white', text:'text-black'})
  }
  
  return (
    <ThemeContext.Provider value={{theme,style, toggleTheme}}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Homepage />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
