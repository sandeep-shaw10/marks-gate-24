import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Banner1 from '../svg/Banner1';
import { Link } from 'react-router-dom';
import { EXAM, NOTIFICATION } from '../answerKey/data';



function Home() {

  return (
      <div style={{ padding: `3vw 0` }}>
        <Container>
            <Row>

                <Col xs={12} md={6}>
                    <div style={{ padding: 48 }}>
                        <Banner1 color={`#0dcaf0`} size={100} />
                    </div>
                </Col>

                <Col xs={12} md={6}>
                    <div className='displayCenter'> 
                        <h2>Select Examination</h2>
                        <div className='py-2'>
                            {
                                EXAM.map(({code, examname, link}, key) => <div key={key} className='pb-1' >
                                    <Link to={link}>
                                        <Button variant="info" className='w-100' >
                                            <Badge bg="light" text="dark" className='me-2'>{code}</Badge>
                                            {examname}
                                        </Button>
                                    </Link>
                                    </div>)
                            }  
                        </div>
                        { NOTIFICATION && <div>
                            ❗️❗️<Badge bg="warning" text="dark">{NOTIFICATION}</Badge>❗️❗️
                        </div>}
                    </div>
                </Col>
                
            </Row>
        </Container>
    </div>
  );
}

export default Home;