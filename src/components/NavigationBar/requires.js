export default async function require(array,oldarray) {
oldarray.forEach(js=>{
    if (js.includes(".chat")) {
        array.push(`"smartestchatbot": "^2.0.1",`)
    }
})
array.reverse()
array[0] = array[0].replace(",","")
array.reverse()
}
