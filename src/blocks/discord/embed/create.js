import * as Blockly from "blockly/core";


const blockName = "s4d_create_embed_then";

const blockData = {
    "message0": "Create new embed %2 then %1",
    "args0": [
        {
            "type": "input_statement",
            "name": "THEN"
        },
        {
            "type":"input_dummy"
        }
    ],
    "colour": "#40BF4A",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block){
    const statementThen = Blockly.Python.statementToCode(block, "THEN");
    const code = `let embed = new Discord.MessageEmbed() \n ${statementThen}\n`;
    return code;
};