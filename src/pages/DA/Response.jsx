import { answerKey, Question } from './data';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function Response({PAPERCODE, ans, setAns}){

    const [show, setShow] = useState(false);

    const chooseMCQ = (position, option) => {
        let valueOption = { A:0, B:0, C:0, D:0, value:`` }
        if(option === `A`) valueOption = { A:1, B:0, C:0, D:0, value:`` }
        if(option === `B`) valueOption = { A:0, B:1, C:0, D:0, value:`` }
        if(option === `C`) valueOption = { A:0, B:0, C:1, D:0, value:`` }
        if(option === `D`) valueOption = { A:0, B:0, C:0, D:1, value:`` }

        setAns(prevArray => {
            const newArray = [...prevArray]
            newArray[position] = valueOption
            return newArray
        })
    }

    const chooseMSQ = (e, position, option) => {
        const checkedVal = e.target.checked ? 1 : 0
        setAns(prevState => {
            const updatedOption = {
                ...prevState[position],
                [option]: checkedVal 
            };
            Object.keys(prevState[position]).forEach(key => {
                if (key !== option) {
                updatedOption[key] = prevState[position][key];
                }
            });
            return Object.values({
                ...prevState,
                [position]: updatedOption
            });
        })
    }

    const clearResponse = (position, qtype) => {
        let valueOption = { A:0, B:0, C:0, D:0, value:`` }
        setAns(prevArray => {
            const newArray = [...prevArray]
            newArray[position] = valueOption
            return newArray
        })
    }

    const saveResponse = () => {
        const jsonString = JSON.stringify(ans);
        localStorage.setItem(PAPERCODE, jsonString);
        setShow(true)
    }

    return(
        <div style={{ padding: '8px 32px 64px' }}>
            <h3>Enter Your Response</h3>
            <Form>
                <div className="question">
                    {
                        answerKey.map((value, key) => <div key={key} className="questionPart" >
                            <div className='response' >
                                <Badge bg="light" text="dark">Question: {value.no}</Badge>
                                <Button size="sm" style={{ padding: `2px 8px`, marginBottom: `4px` }} onClick={() => clearResponse(key, value.type)} >
                                    Clear
                                </Button>
                            </div>

                            <hr className='m-0 mb-2'/>

                            <div></div>

                            {

                                value.type === Question.MCQ ? 
                                <div className="mb-3">
                                    <Form.Check checked={ans[key].A === 1 ? true : false} onChange={() => chooseMCQ(key, `A`)} inline label="A" name={`group-${value.no}`} type='radio' id={`${value.no}-A`} />
                                    <Form.Check checked={ans[key].B === 1 ? true : false} onChange={() => chooseMCQ(key, `B`)} inline label="B" name={`group-${value.no}`} type='radio' id={`${value.no}-B`} />
                                    <Form.Check checked={ans[key].C === 1 ? true : false} onChange={() => chooseMCQ(key, `C`)} inline label="C" name={`group-${value.no}`} type='radio' id={`${value.no}-C`} />
                                    <Form.Check checked={ans[key].D === 1 ? true : false} onChange={() => chooseMCQ(key, `D`)} inline label="D" name={`group-${value.no}`} type='radio' id={`${value.no}-D`} />
                                </div>:

                                value.type === Question.MSQ ?
                                <div className="mb-3">
                                    <Form.Check checked={ans[key].A === 1 ? true : false} onChange={(e) => chooseMSQ(e, key, `A`)} inline label="A" name={`group-${value.no}`} type='checkbox' id={`${value.no}-A`} />
                                    <Form.Check checked={ans[key].B === 1 ? true : false} onChange={(e) => chooseMSQ(e, key, `B`)} inline label="B" name={`group-${value.no}`} type='checkbox' id={`${value.no}-B`} />
                                    <Form.Check checked={ans[key].C === 1 ? true : false} onChange={(e) => chooseMSQ(e, key, `C`)} inline label="C" name={`group-${value.no}`} type='checkbox' id={`${value.no}-C`} />
                                    <Form.Check checked={ans[key].D === 1 ? true : false} onChange={(e) => chooseMSQ(e, key, `D`)} inline label="D" name={`group-${value.no}`} type='checkbox' id={`${value.no}-D`} />
                                </div>
                                :
                                
                                <div>
                                    <Form.Control onChange={(e) => {
                                        setAns(prevArray => {
                                            const newArray = [...prevArray]
                                            newArray[key] = { A:0, B:0, C:0, D:0, value:e.target.value }
                                            return newArray
                                        })
                                    }} id={`${value.no}`} value={ans[key].value} />
                                </div>
                            }

                        </div>)
                    }
                </div>
            </Form>

            <div style={{ margin: `24px` }}>
                <Alert show={show} variant="success">
                    <Alert.Heading>Response Saved</Alert.Heading>
                    <p>Your response is saved to local storage </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close
                    </Button>
                    </div>
                </Alert>
            </div>


            <div style={{ margin: `24px` }}>
                <Button variant="info" onClick={() => saveResponse()}>
                    Save
                </Button>
            </div>

        </div>
    )
}

export default Response