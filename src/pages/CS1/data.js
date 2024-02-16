const Question = {
    MCQ: "MCQ",
    MSQ: "MSQ",
    NAT: "NAT"
}

const Section = {
    TECH: "Technical",
    GA: "General Aptitude"
}

const Fullmarks = 100

const PAPERCODE = `CS1`

const PAPERNAME = `Computer Science & I.T (Forenoon)`

const SOURCE = `GOClasses`

const answerKey = [
    { no: "1", section: Section.GA, type:Question.MCQ, marks: 1, negative: 1/3, A:0, B:1, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "2", section: Section.GA, type:Question.MCQ, marks: 1, negative: 1/3, A:0, B:0, C:0, D:0, roundOff: null, lower:null, upper:null, mta: true },
    { no: "3", section: Section.GA, type:Question.MCQ, marks: 1, negative: 1/3, A:1, B:0, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "4", section: Section.GA, type:Question.MCQ, marks: 1, negative: 1/3, A:1, B:0, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "5", section: Section.GA, type:Question.MCQ, marks: 1, negative: 1/3, A:0, B:0, C:1, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "6", section: Section.GA, type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:0, C:0, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "7", section: Section.GA, type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:0, C:1, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "8", section: Section.GA, type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:0, C:0, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "9", section: Section.GA, type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:1, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "10",section: Section.GA,  type:Question.MCQ, marks: 2, negative: 2/3, A:1, B:0, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "11",section: Section.TECH,  type:Question.MCQ, marks: 1, negative: 1/3, A:0, B:1, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "12",section: Section.TECH,  type:Question.MCQ, marks: 1, negative: 1/3, A:0, B:1, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "13",section: Section.TECH,  type:Question.MCQ, marks: 1, negative: 1/3, A:0, B:0, C:0, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "14",section: Section.TECH,  type:Question.MCQ, marks: 1, negative: 1/3, A:0, B:0, C:1, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "15",section: Section.TECH,  type:Question.MCQ, marks: 1, negative: 1/3, A:1, B:0, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "16",section: Section.TECH,  type:Question.MCQ, marks: 1, negative: 1/3, A:1, B:0, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "17",section: Section.TECH,  type:Question.MCQ, marks: 1, negative: 1/3, A:0, B:1, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "18",section: Section.TECH,  type:Question.MCQ, marks: 1, negative: 1/3, A:0, B:1, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "19",section: Section.TECH,  type:Question.MCQ, marks: 1, negative: 1/3, A:0, B:0, C:1, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "20",section: Section.TECH,  type:Question.MCQ, marks: 1, negative: 1/3, A:0, B:0, C:1, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "21",section: Section.TECH,  type:Question.MCQ, marks: 1, negative: 1/3, A:0, B:1, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "22",section: Section.TECH,  type:Question.MSQ, marks: 1, negative: 0, A:0, B:1, C:1, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "23",section: Section.TECH,  type:Question.MSQ, marks: 1, negative: 0, A:0, B:0, C:1, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "24",section: Section.TECH,  type:Question.MSQ, marks: 1, negative: 0, A:1, B:0, C:1, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "25",section: Section.TECH,  type:Question.MSQ, marks: 1, negative: 0, A:1, B:0, C:1, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "26",section: Section.TECH,  type:Question.MSQ, marks: 1, negative: 0, A:0, B:1, C:1, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "27",section: Section.TECH,  type:Question.MSQ, marks: 1, negative: 0, A:1, B:0, C:1, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "28",section: Section.TECH,  type:Question.MSQ, marks: 1, negative: 0, A:0, B:1, C:0, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "29",section: Section.TECH,  type:Question.MSQ, marks: 1, negative: 0, A:1, B:0, C:1, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "30",section: Section.TECH,  type:Question.NAT, marks: 1, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:2, upper:2, mta: false },
    { no: "31",section: Section.TECH,  type:Question.NAT, marks: 1, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:0, upper:0, mta: false },
    { no: "32",section: Section.TECH,  type:Question.NAT, marks: 1, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:110, upper:110, mta: false },
    { no: "33",section: Section.TECH,  type:Question.NAT, marks: 1, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:2040, upper:2040, mta: false },
    { no: "34",section: Section.TECH,  type:Question.NAT, marks: 1, negative: 0, A:0, B:0, C:0, D:0, roundOff: 1, lower:10.2, upper:10.2, mta: false },
    { no: "35",section: Section.TECH,  type:Question.NAT, marks: 1, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:7, upper:7, mta: false },
    { no: "36",section: Section.TECH,  type:Question.MCQ, marks: 2, negative: 2/3, A:1, B:0, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "37",section: Section.TECH,  type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:0, C:0, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "38",section: Section.TECH,  type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:0, C:1, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "39",section: Section.TECH,  type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:1, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "40",section: Section.TECH,  type:Question.MCQ, marks: 2, negative: 2/3, A:1, B:0, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "41",section: Section.TECH,  type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:1, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "42",section: Section.TECH,  type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:0, C:1, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "43",section: Section.TECH,  type:Question.MCQ, marks: 2, negative: 2/3, A:1, B:0, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "44",section: Section.TECH,  type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:0, C:1, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "45",section: Section.TECH,  type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:0, C:1, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "46",section: Section.TECH,  type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:1, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "47",section: Section.TECH,  type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:0, C:1, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "48",section: Section.TECH,  type:Question.MCQ, marks: 2, negative: 2/3, A:0, B:0, C:0, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "49",section: Section.TECH,  type:Question.MSQ, marks: 2, negative: 0, A:0, B:1, C:1, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "50",section: Section.TECH,  type:Question.MSQ, marks: 2, negative: 0, A:0, B:1, C:1, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "51",section: Section.TECH,  type:Question.MSQ, marks: 2, negative: 0, A:1, B:0, C:0, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "52",section: Section.TECH,  type:Question.MSQ, marks: 2, negative: 0, A:0, B:0, C:1, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "53",section: Section.TECH,  type:Question.MSQ, marks: 2, negative: 0, A:0, B:0, C:1, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "54",section: Section.TECH,  type:Question.MSQ, marks: 2, negative: 0, A:1, B:0, C:0, D:1, roundOff: null, lower:null, upper:null, mta: false },
    { no: "55",section: Section.TECH,  type:Question.MSQ, marks: 2, negative: 0, A:1, B:1, C:0, D:0, roundOff: null, lower:null, upper:null, mta: false },
    { no: "56",section: Section.TECH,  type:Question.NAT, marks: 2, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:5040, upper:5040, mta: false },
    { no: "57",section: Section.TECH,  type:Question.NAT, marks: 2, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:4096, upper:4096, mta: false },
    { no: "58",section: Section.TECH,  type:Question.NAT, marks: 2, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:5, upper:5, mta: false },
    { no: "59",section: Section.TECH,  type:Question.NAT, marks: 2, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:8, upper:8, mta: false },
    { no: "60",section: Section.TECH,  type:Question.NAT, marks: 2, negative: 0, A:0, B:0, C:0, D:0, roundOff: 3, lower:2.374, upper:2.376, mta: false },
    { no: "61",section: Section.TECH,  type:Question.NAT, marks: 2, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:2, upper:2, mta: false },
    { no: "62",section: Section.TECH,  type:Question.NAT, marks: 2, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:6, upper:6, mta: false },
    { no: "63",section: Section.TECH,  type:Question.NAT, marks: 2, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:4, upper:4, mta: false },
    { no: "64",section: Section.TECH,  type:Question.NAT, marks: 2, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:19, upper:19, mta: false },
    { no: "65",section: Section.TECH,  type:Question.NAT, marks: 2, negative: 0, A:0, B:0, C:0, D:0, roundOff: 0, lower:3, upper:3, mta: false },
]


export { answerKey, Section, Question, Fullmarks, PAPERCODE, PAPERNAME, SOURCE }