const parsePasteData = (response) => {

    const regex = /^-?\d*\.?\d+$|^\s*--\s*$|^[ABCD]$|^(A|B|C|D)(;(A|B|C|D))*$/;
    const replaced = response.replace(/\n/g, '\t');
    const lines = replaced.split('\t');
    const resultResponse = []

    lines.forEach((line, key) => {
        if(key%3 === 1){
            if(regex.test(line)){
                resultResponse.push(line)
            }
        }
    });

    return(resultResponse)
}


export default parsePasteData