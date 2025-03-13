import React from 'react'

import bg from './modal_minigame.png'

const MiniGameModal = () => {
  return (
    <div
      className="transition-all duration-300"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent backdrop
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
      }}
    >
      <div className="relative">
        <div className="absolute">
          <h2>Mini Game</h2>
          <p>Play your mini game here.</p>
        </div>
        <img src={bg} alt="Mini Game" width={1400} />
      </div>
    </div>
  )
}

export default MiniGameModal
