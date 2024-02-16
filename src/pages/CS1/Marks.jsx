import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { answerKey, Fullmarks, Question, Section } from './data';
import { useState, useEffect, useCallback } from 'react';
import { MCQAnalysis, MSQAnalysis, NATAnalysis, SectionAnalysis } from '../../utils/Analysis';


function Marks({ans}){

    const computation = useCallback(() => {
        const getMCQAnalysis = MCQAnalysis(answerKey, ans, Question.MCQ)
        const getMSQAnalysis = MSQAnalysis(answerKey, ans, Question.MSQ)
        const getNATAnalysis = NATAnalysis(answerKey, ans, Question.NAT)
        const getSectionAnalysis = SectionAnalysis(answerKey, ans, Question, Section)
        const total = (getMCQAnalysis.posmcq + getMCQAnalysis.negmcq + getMSQAnalysis.posmsq + getNATAnalysis.posnat ).toFixed(2)
        const posTotal = (getMCQAnalysis.posmcq + getMSQAnalysis.posmsq + getNATAnalysis.posnat).toFixed(2)
        const negTotal = getMCQAnalysis.negmcq.toFixed(2)
        const correct = getMCQAnalysis.c + getMSQAnalysis.c + getNATAnalysis.c
        const attempt = getMCQAnalysis.a + getMSQAnalysis.a + getNATAnalysis.a

        return ({
            marks: total,
            posmarks: posTotal,
            negmarks: negTotal,
            attempted: attempt,
            corrected: correct,
            posga: getSectionAnalysis.posga.toFixed(2),
            negga: getSectionAnalysis.negga.toFixed(2),
            postech: getSectionAnalysis.postech.toFixed(2),
            negtech: getSectionAnalysis.negtech.toFixed(2),
            posmcq: getMCQAnalysis.posmcq.toFixed(2),
            neqmcq: getMCQAnalysis.negmcq.toFixed(2),
            msq: getMSQAnalysis.posmsq.toFixed(2),
            nat: getNATAnalysis.posnat.toFixed(2)
        })
    }, [ans])

    const [analysis, setAnalysis] = useState(computation())

    useEffect(() => {
        setAnalysis(() => {
            return computation()
        })
    }, [ans, computation]);

    return(
        <div style={{ padding: '8px 32px 48px' }}>
            
            <div className='marks-layout1'>
                <div className='marks-box1'>

                    <h1>Marks: <Badge bg="light" text="dark" >{analysis.marks} / {Fullmarks}</Badge></h1>

                    <div style={{ marginTop: `8px` }}>
                        <Stack direction="horizontal" gap={2}>
                            <h4><Badge pill bg="success">+{analysis.posmarks}</Badge></h4>
                            <h4><Badge pill bg="danger">{analysis.negmarks}</Badge></h4>
                        </Stack>
                    </div>


                </div>
                <div>
                    <div className='marks-box2'>
                        <div>
                            <h6>Attempt: <Badge bg="light" text="dark">{analysis.attempted} / {answerKey.length}</Badge></h6>
                        </div>
                        <div>
                            <h6>Covered: <Badge bg="light" text="dark">{(analysis.attempted*100/answerKey.length).toFixed(2)}%</Badge></h6>
                        </div>
                    </div>
                    <div className='marks-box2'>
                        <div>
                            <h6>Correct: <Badge bg="light" text="dark">{analysis.corrected} / {answerKey.length}</Badge></h6>
                        </div>
                        <div>
                            <h6>Accuracy: <Badge bg="light" text="dark">{(analysis.corrected*100/analysis.attempted).toFixed(2)}%</Badge></h6>
                        </div>  
                    </div>
                </div>
            </div>

            <hr />

            <div>
                <Stack direction="horizontal" gap={2}>
                    <h3><Badge bg="primary">Aptitude</Badge></h3>
                    <h3><Badge bg="success">+{analysis.posga}</Badge></h3>
                    <h3><Badge bg="danger">{analysis.negga}</Badge></h3>
                </Stack>
            </div>

            <div>
                <Stack direction="horizontal" gap={2}>
                    <h3><Badge bg="info">Technical</Badge></h3>
                    <h3><Badge bg="success">+{analysis.postech}</Badge></h3>
                    <h3><Badge bg="danger">{analysis.negtech}</Badge></h3>
                </Stack>
            </div>

            <hr />

            <div>
                <Stack direction="horizontal" gap={2}>
                    <h3><Badge bg="light" text="dark">MCQ</Badge></h3>
                    <h3><Badge bg="success">+{analysis.posmcq}</Badge></h3>
                    <h3><Badge bg="danger">{analysis.neqmcq}</Badge></h3>
                </Stack>
            </div>

            <div>
                <Stack direction="horizontal" gap={2}>
                    <h3><Badge bg="secondary">MSQ</Badge></h3>
                    <h3><Badge bg="success">+{analysis.msq}</Badge></h3>
                </Stack>
            </div>

            <div>
                <Stack direction="horizontal" gap={2}>
                    <h3><Badge bg="dark">NAT</Badge></h3>
                    <h3><Badge bg="success">+{analysis.nat}</Badge></h3>
                </Stack>
            </div>

            <hr />

            <div style={{ margin: `24px` }} className='hide-print'>
                <Button variant="info" onClick={() => window.print()} >Print </Button>
            </div>

        </div>
    )
}


export default Marks