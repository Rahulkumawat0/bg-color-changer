function BgChangerButton({ clr, func }) {
  return (
    <button
      onClick={func}
      className="w-8 h-8 rounded-full shadow-md 
                 hover:scale-110 transition-transform 
                 border border-gray-200"
      style={{ backgroundColor: clr }}
    />
  )
}

export default BgChangerButton