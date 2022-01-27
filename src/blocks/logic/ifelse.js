import * as Blockly from "blockly/core";

const blockName = "if_else_py";

const blockData = {
    "message0": "If %1 do %2 else %3",
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
        {
            "type": "input_statement",
            "name": "ELSE"
        },
    ],
    "colour": "#5b80a5",
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

Blockly.JavaScript[blockName] = function(block){
  const bool = Blockly.JavaScript.valueToCode(block, "bool", Blockly.JavaScript.ORDER_ATOMIC);
const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");

          const code = `\nif ${bool}:\n ${statementThen} \nelse:\n`;
          return code
};