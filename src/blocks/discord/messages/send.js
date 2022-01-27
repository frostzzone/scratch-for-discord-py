import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_send";

const blockData = {
    "message0": "Send %1",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "Number", "String", "MessageEmbed","embed", "var"]
        },
    ],
    "colour": "#4C97FF",
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
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    if(block.getInput("CONTENT").connection.targetConnection){
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
        block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
        null;
        if ((contentType === "var")) {
            const code = `s4dmessage.channel.send(${content})\n`;
            return code;
        }else if((contentType === "embed") || (!contentType && typeof contentType === "object")){
            const code = `s4dmessage.channel.send(${content})\n`;
            return code;
        } else if((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")){
            const code = `s4dmessage.channel.send(${content})\n`;
            return code;
        } else {
            const code = `s4dmessage.channel.send(${content})\n`;
            return code;
        }
    } else {
        const code = `s4dmessage.channel.send(${content})\n`;
        return code;
    }
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CONTENT",
        types: [
          "CONTENT"
        ]
    },
    {
        type: "parent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message"
        ]
    }
]);