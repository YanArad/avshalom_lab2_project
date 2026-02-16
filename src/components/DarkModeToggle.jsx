import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './DarkModeToggle.css'

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleTheme()
    }
  }

  return (
    <div className="dark-mode-toggle-container">
      <button
        className="dark-mode-toggle"
        onClick={toggleTheme}
        onKeyDown={handleKeyDown}
        aria-label="Toggle dark mode"
        title="Toggle Dark Mode"
        tabIndex={0}
      >
        <div className={`toggle-switch ${isDarkMode ? 'dark' : 'light'}`}>
          <span className="toggle-icon">
            {isDarkMode ? '🌙' : '☀️'}
          </span>
        </div>
      </button>
    </div>
  )
}

export default DarkModeToggle
