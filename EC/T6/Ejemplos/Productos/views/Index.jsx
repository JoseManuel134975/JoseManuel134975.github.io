import Navbar from '../components/Navbar.jsx'
import Search from '../components/Search.jsx'
import Grid from '../components/Grid.jsx'


export default function Index(){
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <Search></Search>
            <Grid></Grid>
        </>
    )
}