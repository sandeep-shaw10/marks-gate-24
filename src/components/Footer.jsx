import {Container} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';


function Footer(){
    return(
    <div className='hide-print'>
        <Navbar className="bg-body-tertiary" fixed='bottom'> 
            <Container>
            <Navbar.Collapse className="justify-content-center">
                <Navbar.Text>
                {`Made by  `}
                <a href='https://github.com/sandeep-shaw10' target='_blank'>sandeep-shaw10</a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}


export default Footer