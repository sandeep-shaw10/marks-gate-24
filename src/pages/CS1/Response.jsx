import { answerKey, Question } from './data';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import parsePasteData from '../../utils/parsePasteData';


function Response({PAPERCODE, ans, setAns}){

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const [inputFormat, setInputFormat] = useState(true);
    const [response, setResponse] = useState(``)

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

    const parseResponse = () => {
        const parsedAnswer = []
        const resultResponse = parsePasteData(response)
        if(resultResponse.length === ans.length){
            ans.forEach((val, key) => {
                if(resultResponse[key] === `--`){
                    parsedAnswer.push({A: 0, B: 0, C: 0, D: 0, value: ''})
                }
                else if(!isNaN(resultResponse[key])){
                    parsedAnswer.push({A: 0, B: 0, C: 0, D: 0, value: resultResponse[key]})
                }
                else if(resultResponse[key] === `A`){
                    parsedAnswer.push({A: 1, B: 0, C: 0, D: 0, value: ''})
                }
                else if(resultResponse[key] === `B`){
                    parsedAnswer.push({A: 0, B: 1, C: 0, D: 0, value: ''})
                }
                else if(resultResponse[key] === `C`){
                    parsedAnswer.push({A: 0, B: 0, C: 1, D: 0, value: ''})
                }
                else if(resultResponse[key] === `D`){
                    parsedAnswer.push({A: 0, B: 0, C: 0, D: 1, value: ''})
                }else{
                    const result = { A: 0, B: 0, C: 0, D: 0, value: '' };
                    const letters = resultResponse[key].split(';');
                    letters.forEach(letter => {
                        // Trim the letter to remove any leading or trailing whitespace
                        letter = letter.trim().toUpperCase();
                        
                        // Update the corresponding property in the result object
                        if (result.hasOwnProperty(letter)) {
                            result[letter] = 1;
                        }
                    });
                    parsedAnswer.push(result)
                }
            })
            setAns(() => {
                const jsonString = JSON.stringify(parsedAnswer);
                localStorage.setItem(PAPERCODE, jsonString);
                setShow(true)
                return parsedAnswer
            })
        }else{
            setError(true)
        }
    }

    return(
        <div style={{ padding: '8px 32px 64px' }}>
            <h3>Enter Your Response</h3>

            <Form>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="formatview"
                    label="Copy Paste Answer Key"
                    checked={inputFormat}
                    onChange={() => {
                        setInputFormat(prev => !prev)
                    }}
                />
            </Form>

            { inputFormat ? <div style={{ padding: `20px` }}>
                <Form>
                    <Form.Control
                        as="textarea"
                        placeholder="Paste your response"
                        style={{ height: '600px' }}
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                    />
                </Form>
            </div> :
            
            <div>
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
            </div>
            }

                <div style={{ margin: `24px` }}>
                    <Alert show={error} variant="danger">
                        <Alert.Heading>Unable to Parse the Response</Alert.Heading>
                        <p> Refer this <a href='https://github.com/sandeep-shaw10' target='_blank' rel="noreferrer">DEMO</a> for correctly copying your response  </p>
                        <p> OR  </p>
                        <p> Enter your response one by one manually  </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                        <Button onClick={() => setError(false)} variant="outline-danger">
                            Close
                        </Button>
                        </div>
                    </Alert>

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
                { !inputFormat ? <Button variant="info" onClick={() => saveResponse()}> Save </Button>: 
                    <Button variant="warning" text="dark" onClick={() => parseResponse()}> Parse and Save </Button>
                }
                </div>

        </div>
    )
}

export default Response