import Blockly from "blockly/core";

const blockName = "s4d_includes";

const blockData = {
    "message0": "%1 %3 %2",
    "args0": [
        {
            "type": "input_value",
            "name": "STRING",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "SUBSTRING",
            "check": [ "String" ]
        },
      {
        "type": "field_dropdown",
        "name": "TYPE",
        "options": [
            [
              "includes", 
              "in"
            ],
            [
                  "does not include",
                  "not in"
              ],
            ]
    }
    ],
    "output": "Boolean",
    "colour": "#5ba58b",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
    const string = Blockly.Python.valueToCode(block, "STRING", Blockly.Python.ORDER_ATOMIC);
    const substring = Blockly.Python.valueToCode(block, "SUBSTRING", Blockly.Python.ORDER_ATOMIC);
  const type = block.getFieldValue("TYPE");
    const code = [ `${substring} ${type} ${string}`, Blockly.Python.ORDER_NONE ];
    return code;
};