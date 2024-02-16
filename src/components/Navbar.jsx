import {Container} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';


function Nav(){
    return(
        <Navbar className="bg-body-tertiary">
            <Container>
            <Navbar.Brand>GATE 2024</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                IISc Bangalore
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Nav