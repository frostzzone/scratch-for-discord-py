import Blockly from "blockly/core";

const blockName = "s4d_newline";

const blockData = {
    "message0": "new line",
    "args0": [
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

Blockly.JavaScript[blockName] = function() {
    return `<br>\n`;
};