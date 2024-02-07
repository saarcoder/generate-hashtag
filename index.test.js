const generateHashtag = require('./index')
test('Transform string to Hashtag', ()=> {
    expect(generateHashtag('face the challenge and learn something new')).toBe('#FaceTheChallengeAndLearnSomethingNew')
    expect(generateHashtag('Codewars is a platform that helps you learn, train, and improve your coding skills by solving programming tasks of many types and difficulty levels. Codewarsis a platform that helps you learn, train, and improve your coding skills by solving programming tasks of many types and difficulty levels. You choose how you would like to learn.')).toBe(false)
})