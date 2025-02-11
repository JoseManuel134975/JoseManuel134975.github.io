import NavbarHeader from '../components/NavbarHeader.jsx'
import Grid from '../components/Grid.jsx'
import Search from '../components/Search.jsx'
import Select from '../components/Select.jsx'

export default function Home() {
  return (
    <>
      <NavbarHeader></NavbarHeader>
      <Select></Select>
      <Search></Search>
      <Grid></Grid>
    </>
  )
}
