import searchIcon from '../../assets/search.png'  
import { Container, Input, Button, Icon} from './styles'


function Search() {
    return (
        <Container>
            <Input name="search" type="text" placeholder="Buscar"/>
            <Button>
                <Icon src={searchIcon} />
            </Button>
        </Container>
    )
}

export default Search;
  