import styled from 'styled-components'
import NavBar from './NavBar'
import ThemeToggle from '../components/ThemeToggle'

function Home() {
  return (
    <Container>
      <NavBar />
      <ThemeToggle />
      <h1>Home</h1>
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
`