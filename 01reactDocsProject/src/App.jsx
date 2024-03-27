import { useState } from 'react'
import ProductPages from "./Components/ProductPages"

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <>
     <label>
       <input 
        type="checkbox" 
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark Mode
     </label>
     <hr />
      <ProductPages
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  )
}

export default App;
