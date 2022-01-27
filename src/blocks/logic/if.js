import * as Blockly from "blockly/core";

const blockName = "if_py";

const blockData = {
  "message0": "If %1 do %2",
  "args0": [
    {
      "type": "input_value",
      "name": "bool",
      "check": ["Boolean"]
    },
    {
      "type": "input_statement",
      "name": "THEN"
    },
  ],
  "colour": "#5b80a5",
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  let bool = "";

  if ((Blockly.JavaScript.valueToCode(block, "bool", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
    bool = Blockly.JavaScript.valueToCode(block, "bool", Blockly.JavaScript.ORDER_ATOMIC);
  } else {
    bool = false
  }
  const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");

  const code = `if ${bool}:\n${statementThen} \n`;
  return code
};