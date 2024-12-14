const os=require('os')
const path=require('path')
const {readFileSync , writeFileSync}=require('fs')

const user=os.userInfo()
console.log(user)

const filePath=path.join('/content','/subfolder','text.txt')
console.log(filePath)

const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)

const second=readFileSync('./content/second.txt','utf8')
const first=readFileSync('./content/subfolder/first.txt','utf8')

writeFileSync('./content/result-sync.txt',`this is the result : ${first},${second}`)

console.log(first , second)
