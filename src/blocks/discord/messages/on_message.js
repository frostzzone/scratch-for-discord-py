import * as Blockly from "blockly";

const blockName = "s4d_on_message";

const blockData = {
    "message0": "%{BKY_ON_MESSAGE} %1 %2",
    "colour": "#F5AB1A",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
    const statements = Blockly.Python.statementToCode(block, "STATEMENTS");
    const code = `@s4dbot.event
async def on_message(s4dmessage):\n${statements}\n`;
    return code;
};