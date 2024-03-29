import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Response from './Response';
import Answer from './Answer';
import Marks from './Marks';


function Papers({ DATA }){

    const { answerKey, PAPERCODE, PAPERNAME, SOURCE, Fullmarks } = DATA
    
    const [key, setKey] = useState('t1');
    const [ans, setAns] = useState(() => {
        const getStoredData = localStorage.getItem(PAPERCODE)
        if(getStoredData === null){
            return new Array(answerKey.length).fill({ A:0, B:0, C:0, D:0, value:`` })
        }else{
            const parseData = JSON.parse(getStoredData)
            return parseData
        }
    })

    return(
        <div >

            <div className='ps-4 py-2'>
                <Breadcrumb>
                    <Breadcrumb.Item href='/'>
                        <Link to='/'>Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{`${PAPERNAME} (${PAPERCODE})`}</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div>
                <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3" >
                    <Tab eventKey="t1" title="Response">
                        <Response PAPERCODE={PAPERCODE} ans={ans} setAns={setAns} answerKey={answerKey} />
                    </Tab>
                    <Tab eventKey="t3" title={`Answer Key (${SOURCE})`}>
                        <Answer ans={ans} answerKey={answerKey} />
                    </Tab>
                    <Tab eventKey="t4" title="Marks">
                        <Marks ans={ans} answerKey={answerKey} Fullmarks={Fullmarks} />
                    </Tab>
                </Tabs>
            </div>

        </div>
    );
}

export default Papers