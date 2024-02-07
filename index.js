const generateHashtag = str=> {
    let string = str.trim().split(' ').map(el=> el.trim().slice(0,1).toUpperCase()+el.trim().slice(1)).join('')
    return str.trim().length < 1 || string.length > 139? false: string.padStart(string.length+1,'#')
}

module.exports = generateHashtag