import React from 'react'
import DarkModeToggle from './components/DarkModeToggle'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Dark Mode Toggle Demo</h1>
          <div className="header-right">
            <DarkModeToggle />
            <div className="user-profile-icon" aria-label="User profile">
              👤
            </div>
          </div>
        </div>
      </header>
      <main className="app-main">
        <div className="content">
          <h2>Welcome to the Dark Mode Toggle Feature</h2>
          <p>
            This application demonstrates a fully functional dark mode toggle
            that meets all accessibility requirements and provides a smooth user
            experience.
          </p>
          <section className="features">
            <h3>Features:</h3>
            <ul>
              <li>Toggle switch in the top-right corner</li>
              <li>Sun/Moon icon indicating current theme</li>
              <li>Theme preference saved to local storage</li>
              <li>Smooth transitions (0.3s ease-in-out)</li>
              <li>Keyboard navigable (Tab + Enter/Space)</li>
              <li>Screen reader support</li>
              <li>WCAG contrast ratio compliance</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
