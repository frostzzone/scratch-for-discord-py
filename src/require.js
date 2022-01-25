export default async function require(array,code,js) {
if(js.includes(".chat")) {
    array.push(`const smartestchatbot = require('smartestchatbot');
    const client = new smartestchatbot.Client();
    `)
}
}
