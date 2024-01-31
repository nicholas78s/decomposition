import './App.css'
import { TopBlock } from './components/TopBlock'
import { SearchBlock } from './components/SearchBlock'
import { UserBlocks } from './components/UserBlocks'
import { Advertisement } from './components/Advertisement'

function App() {
  return (
    <>
      <TopBlock />
      <SearchBlock />
      <Advertisement type="banner" src="#"/>
      <UserBlocks />
    </>
  )
}

export default App
