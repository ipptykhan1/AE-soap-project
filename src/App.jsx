
import './App.css'
import Banner from './components/Banner/Banner'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import PostPoo from './components/PostPoo/PostPoo'
import Skin from './components/Skin/Skin'
import Speech from './components/Speech/Speech'
import Store from './components/Store/Store'
import WarmUp from './components/WarmUp/WarmUp'

function App() {
  

  return (
    
    <>
    <Header></Header>   
    <NavBar></NavBar>
      <Banner></Banner>
      <Body></Body>
      <WarmUp></WarmUp>
      <Skin></Skin>
      <PostPoo></PostPoo>
      <Home></Home>
      <Store></Store>
     <Speech></Speech> 
     <Footer></Footer>
     
    </>
    
  )
}

export default App
