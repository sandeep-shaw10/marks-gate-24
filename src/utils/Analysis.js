import countDecimal from "./countDecimal"


const MCQAnalysis = (answerKey, ans, MCQ) => {
    let posmcq = 0
    let negmcq = 0
    let c = 0
    let a = 0
    answerKey.forEach((data, key) => {
        if(data.type === MCQ){
            if(data.mta){
                posmcq += data.marks
                c += 1
            }
            else if(ans[key].A || ans[key].B || ans[key].C || ans[key].D){
                if(data.A === ans[key].A && data.B === ans[key].B && data.C === ans[key].C && data.D === ans[key].D){
                    posmcq += data.marks
                    c += 1
                }else{
                    negmcq -= data.negative
                    a += 1
                }
            }
        }
    })
    a += c
    return { posmcq, negmcq, c, a }
}


const MSQAnalysis = (answerKey, ans, MSQ) => {
    let posmsq = 0
    let c = 0
    let a = 0
    answerKey.forEach((data, key) => {
        if(data.type === MSQ){
            if(data.mta){
                posmsq += data.marks
                c += 1
            }
            else if(ans[key].A || ans[key].B || ans[key].C || ans[key].D){
                if(data.A === ans[key].A && data.B === ans[key].B && data.C === ans[key].C && data.D === ans[key].D){
                    posmsq += data.marks
                    c += 1
                }else{
                    a += 1
                }
            }
        }
    })
    a += c
    return { posmsq, c , a}
}


const NATAnalysis = (answerKey, ans, NAT) => {
    let posnat = 0
    let c = 0
    let a = 0
    answerKey.forEach((data, key) => {
        if(data.type === NAT){
            if(data.mta){
                posnat += data.marks
                c += 1
            }
            else if(ans[key].value !== ``){
                a += 1
                const numericVal = parseFloat(ans[key].value)
                const decimalPlaces = countDecimal(numericVal)
                if(data.roundOff === decimalPlaces){
                    if(numericVal >= data.lower && numericVal <= data.upper){
                        posnat += data.marks
                        c += 1
                    }
                }
            }
        }
    })
    return { posnat, c, a }
}


const SectionAnalysis = (answerKey, ans, Question, Section) => {
    let posga = 0
    let negga = 0
    let postech = 0
    let negtech = 0
    answerKey.forEach((data, key) => {

        if(data.section === Section.GA){

            if(data.mta){ posga += data.marks }

            else{

                if(data.type === Question.NAT){
                    if(ans[key].value !== ``){
                        const numericVal = parseFloat(ans[key].value)
                        const decimalPlaces = countDecimal(numericVal)
                        if(data.roundOff === decimalPlaces){
                            if(numericVal >= data.lower && numericVal <= data.upper){
                                posga += data.marks
                            }
                        }
                    }
                }

                else{
                    if(ans[key].A || ans[key].B || ans[key].C || ans[key].D){
                        if(data.A === ans[key].A && data.B === ans[key].B && data.C === ans[key].C && data.D === ans[key].D){
                            posga += data.marks
                        }else{
                            negga -= data.negative
                        }
                    }
                }

            }

        }

        if(data.section === Section.TECH){

            if(data.mta){ postech += data.marks }

            else{

                if(data.type === Question.NAT){
                    if(ans[key].value !== ``){
                        const numericVal = parseFloat(ans[key].value)
                        const decimalPlaces = countDecimal(numericVal)
                        if(data.roundOff === decimalPlaces){
                            if(numericVal >= data.lower && numericVal <= data.upper){
                                postech += data.marks
                            }
                        }
                    }
                }

                else{
                    if(ans[key].A || ans[key].B || ans[key].C || ans[key].D){
                        if(data.A === ans[key].A && data.B === ans[key].B && data.C === ans[key].C && data.D === ans[key].D){
                            postech += data.marks
                        }else{
                            negtech -= data.negative
                        }
                    }
                }

            }

        }

    })
    return { posga, negga, postech, negtech }
}


export { MCQAnalysis, MSQAnalysis, NATAnalysis, SectionAnalysis }