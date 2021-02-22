import {Container, Logo} from './styles'
import Search from '../../components/Search'
import LogoIcon from '../../assets/logo.png'
  
function Header() {
    return (
        <Container>
            <Logo src={LogoIcon} alt="logo"/>
            <Search />
        </Container>
    )
}

export default Header;
  