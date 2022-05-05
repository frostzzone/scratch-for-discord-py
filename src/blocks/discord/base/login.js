import * as Blockly from "blockly/core";

const blockName = "s4d_login";


const blockData = {
    "type": "block_type",
    "message0": "Conect to discord (token)%1 then %2 %3",
    "args0": [
        {
            "type": "input_value",
            "name": "TOKEN",
            "check": [ "String" ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "colour": "#3333ff",
    "tooltip": "%{BKY_LOGIN_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
    const value = Blockly.Python.valueToCode(block, "TOKEN", Blockly.Python.ORDER_ATOMIC);
    const statements = Blockly.Python.statementToCode(block, "STATEMENTS");
    const code = `s4dbot = commands.Bot
${statements}
s4dbot.run(${value})\n`;
    return code;
};