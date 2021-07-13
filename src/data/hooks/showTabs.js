import React, { createContext, useState, useContext } from 'react'

const ShowTabs = createContext()

const ShowTabContext = ({ children }) => {
  const [showTab, setShowTab] = useState('flex')
  return (
    <ShowTabs.Provider value={{ showTab: showTab, setShowTab }}>
      {children}
    </ShowTabs.Provider>
  )
}

export function useShowTab() {
  const context = useContext(ShowTabs)

  if (!context) {
    throw new Error('useShowTab must be used within an ComponentProvider')
  }

  const { showTab, setShowTab } = context
  return { showTab, setShowTab }
}

export default ShowTabContext
