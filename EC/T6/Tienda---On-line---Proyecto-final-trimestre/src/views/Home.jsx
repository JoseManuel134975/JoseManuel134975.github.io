import NavbarHeader from '../components/NavbarHeader.jsx'
import Grid from '../components/Grid.jsx'
import Search from '../components/Search.jsx'

export default function Home() {
  return (
    <>
      <NavbarHeader></NavbarHeader>
      <Search></Search>
      <Grid></Grid>
      <div>Home</div>
    </>
  )
}
