import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { answerKey, Section, Question } from './data';
import Button from 'react-bootstrap/Button';
import countDecimal from '../../utils/countDecimal';


function Answer({ans}){

    const checkMCQMSQ = (value, ans, key) => {
        if(ans[key].A || ans[key].B || ans[key].C || ans[key].D){
            if(value.A === ans[key].A && value.B === ans[key].B && value.C === ans[key].C && value.D === ans[key].D){
                return 1
            }else{
                return -1
            }
        }
        return 0
    }

    const checkNAT = (value, ans, key) => {
        if(ans[key].value !== ``){
            const numericVal = parseFloat(ans[key].value)
            const decimalPlaces = countDecimal(numericVal)
            if(value.roundOff === decimalPlaces){
                if(numericVal >= value.lower && numericVal <= value.upper){
                    return 1
                }
            }
            return -1
        }
        return 0
    }

    return(
        <div style={{ padding: '8px 32px 48px' }}>
            <Table responsive hover striped="columns">
                <thead>
                    <tr>
                        <th>Sl. No</th>
                        <th>Section</th>
                        <th>Type</th>
                        <th>Marks</th>
                        <th>Answer</th>
                        <th>Your Response</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        answerKey.map((value, key) => <tr key={key} >
                            <td>{value.no}</td>
                            <td>
                                {value.section === Section.TECH ? <Badge bg="info">{value.section}</Badge> : 
                                    <Badge bg="primary">{value.section}</Badge>
                                }
                            </td>
                            <td>
                                {
                                    value.type === Question.MCQ ? <Badge bg="light" text="dark">{value.type}</Badge>:
                                    value.type === Question.MSQ ? <Badge bg="secondary">{value.type}</Badge> : 
                                    <Badge bg="dark">{value.type}</Badge>
                                }
                            </td>
                            <td>{value.marks}</td>
                            <td>
                                {   
                                    value.mta ? <Badge bg="danger">Marks to All</Badge>:
                                    value.type === 'NAT' ? `${value.lower} to ${value.upper}`:
                                    value.type === 'MCQ' ? `${value.A ? `A` : value.B ? `B` : value.C ? `C` : `D`}`:
                                    `${value.A ? 'A' : ''} ${value.B ? 'B' : ''} ${value.C ? 'C' : ''} ${value.D ? 'D' : ''}`
                                }
                            </td>
                            <td>
                                {
                                    value.type === 'NAT' ? ans[key].value :
                                    value.type === 'MCQ' ? `${ans[key].A ? `A` : ans[key].B ? `B` : ans[key].C ? `C` : ans[key].D ? `D` : ``}`:
                                    `${ans[key].A ? 'A' : ''} ${ans[key].B ? 'B' : ''} ${ans[key].C ? 'C' : ''} ${ans[key].D ? 'D' : ``}`
                                }
                            </td>

                            { 
                                (value.type === Question.MCQ || value.type === Question.MSQ) && <td>
                                    {
                                        checkMCQMSQ(value, ans, key) === 1 ? <Badge bg='success'>Correct</Badge> :
                                        checkMCQMSQ(value, ans, key) === -1 ? <Badge bg='danger'>Wrong</Badge> :
                                        <Badge bg='warning' text="dark">Unattempted</Badge>
                                    }
                                </td>
                            } 

                            { 
                                value.type === Question.NAT && <td>
                                {
                                    checkNAT(value, ans, key) === 1 ? <Badge bg='success'>Correct</Badge> :
                                    checkNAT(value, ans, key) === -1 ? <Badge bg='danger'>Wrong</Badge> :
                                    <Badge bg='warning' text="dark">Unattempted</Badge>
                                }
                            </td>
                            }
                        </tr>
                    )
                    }
                    
                </tbody>
            </Table>

            <div style={{ margin: `24px` }} className='hide-print'>
                <Button variant="info" onClick={() => window.print()} >Print </Button>
            </div>

        </div>
    )
}


export default Answer