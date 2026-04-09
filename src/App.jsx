import { useState } from 'react'
import BgChangerButton from './BgChangerButton'

function App() {
  const [color, setColor] = useState('#ef4444')

  const colors = [
    '#ef4444', // red
    '#22c55e', // green
    '#3b82f6', // blue
    '#eab308', // yellow
    '#0f172a', // dark
    '#f97316', // orange
    '#a855f7', // purple
    '#06b6d4', // cyan
    '#ec4899', // pink
    '#84cc16', // lime
  ]

  return (
    <div
      className="w-screen h-screen transition-all duration-500"
      style={{ backgroundColor: color }}
    >
      {/* floating palette */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 
                      flex gap-3 shadow-xl border rounded-2xl 
                      py-3 px-4 bg-white/90 backdrop-blur-md">

        {colors.map((clr, index) => (
          <BgChangerButton
            key={index}
            clr={clr}
            func={() => setColor(clr)}
          />
        ))}
      </div>
    </div>
  )
}

export default App