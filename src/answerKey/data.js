import DA_DATA from './DA'
import CS1_DATA from './CS1'
import CS2_DATA from './CS2'
// import TEST_DATA from './TEST'


const EXAM = [
    { code: DA_DATA.PAPERCODE, examname: DA_DATA.PAPERNAME, link: `/${DA_DATA.LINK}`},
    { code: CS1_DATA.PAPERCODE, examname: CS1_DATA.PAPERNAME, link: `/${CS1_DATA.LINK}`},
    { code: CS2_DATA.PAPERCODE, examname: CS2_DATA.PAPERNAME, link: `/${CS2_DATA.LINK}`},
    // { code: TEST_DATA.PAPERCODE, examname: TEST_DATA.PAPERNAME, link: `/${TEST_DATA.LINK}`},
]

const NOTIFICATION = ''


export { EXAM, NOTIFICATION }