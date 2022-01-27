export default (Blockly) => {
  return (`
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">

<category name="{{ TOOLBOX_LOGIC }}" colour="#5b80a5">
            <block type="if_py"/>
            <block type="if_else_py"/>
            
            <block type="logic_compare">
                <field name="OP">EQ</field>
            </block>
            <block type="logic_operation">
                <field name="OP">AND</field>
            </block>
            <block type="logic_negate" />
            <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
            </block>
            <block type="logic_null" />
            <block type="logic_ternary" />
        </category>

<category name="{{ TOOLBOX_TEXT }}" colour="#5ba58c">
            <block type="text">
                <field name="TEXT" />
            </block>
</category>

<sep class="bt"/>

   <category name="{{ TOOLBOX_BASE }}" colour="#F46580">
<block type="s4d_login"/>
</category>

<category name="{{ TOOLBOX_E_MESSAGES }}" colour="#41AAC0">
<block type="s4d_on_message"/>
<block type="s4d_message_content"/>
<block type="s4d_send"/>
<block type="s4d_reply"/>
</category>
</xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
      return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    }))
    
}
