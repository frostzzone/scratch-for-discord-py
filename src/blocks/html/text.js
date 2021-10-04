import Blockly from "blockly/core";

const blockName = "s4h_text";

const blockData = {
    "message0": "text %1",
    "args0": [
        {
            "type": "input_value",
            "name": "TEXT",
            "check": [ "String", "Number" ]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5ba58b",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const text2 = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const text1 = text2.replace("'",'')
    const text = text1.replace("'",'')
    return `${text}\n`;
};