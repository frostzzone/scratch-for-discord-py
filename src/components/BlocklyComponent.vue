<template>
    <div id="main2">
        <div class="blocklyDiv" ref="blocklyDiv" id="blocklyDiv"></div>
                <div id="container">
        <div id="websiteFrame"><iframe id="website"></iframe></div>
        </div>
        <xml ref="blocklyToolbox" style="display:none">
            <slot></slot>
        </xml>
    </div>
</template>

<script>
import Blockly from "blockly";

import toolbox from "../toolbox";

export default {
    name: "BlocklyComponent",
    props: ["options"],
    data() {
        return {
            toastLogin: false,
            workspace: this.$store.state.workspace
        }
    },
    mounted() {
        this.setLanguage(this.$store.state.blocklyLocale);
        const options = this.$props.options || {};
        options.toolbox = this.$refs["blocklyToolbox"];
        const workspace = Blockly.inject(this.$refs["blocklyDiv"], {
            ...options,
            ...{
                toolbox: toolbox(Blockly)
            }
        });
        this.$store.commit("setWorkspace", {
            workspace
        });
        workspace.addChangeListener(Blockly.Events.disableOrphans);
            function myUpdateFunction() {
                    var code = Blockly.JavaScript.workspaceToCode(workspace);

                document.getElementById('website').src = "data:text/html;charset=utf-8," + encodeURIComponent(code);
            }
            workspace.addChangeListener(myUpdateFunction);
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blocklyDiv {
    height: 100%;
    width: 100%;
    text-align: left;
}
      html, body {
        padding: 0;
        margin: 0;
      }
      #container {
        width:100%;
        height:100%;

      }

      #websiteFrame {grid-area: website; border: 5px solid #444;  -ms-grid-row:3;-ms-grid-column:2; width:100%;height: 100%;}

      #website {width: calc(100% );height: calc(100%);}

</style>
