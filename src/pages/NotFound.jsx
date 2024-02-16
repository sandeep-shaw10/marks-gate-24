import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function NotFound() {

  return (
      <div style={{ margin: `48px`, display: `flex`, justifyContent: `center` }}>
        <div style={{ width: `50vw` }}>
            <Alert variant="danger" >
                <Alert.Heading>Error 404 </Alert.Heading>
                <p>
                The page you are looking for does not exist
                </p>
                <Link to='/'><Button variant="danger">Home</Button></Link>
            </Alert>
        </div>
      </div>
  );
}

export default NotFound;