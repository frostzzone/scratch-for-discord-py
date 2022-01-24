export default (Blockly) => {
  return (`
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
   
    </xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
      return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    }))
    
}
