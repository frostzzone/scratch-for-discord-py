import * as Blockly from "blockly";

const blockName = "s4d_on_nickname_changed";

const blockData = {
    "message0": "When %3 's nickname has been changed",
    "colour": "#1AB6F5",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        }
    ]
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `s4d.client.on('guildMemberUpdate', (oldMember, newMember) => {if(newMember.nickname && oldMember.nickname !== newMember.nickname)} => {\n${statements}\n});\n`;
    return code;
};