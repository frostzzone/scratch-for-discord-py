import Blockly from "blockly";

import blocklyMessages from "./en-US.json";

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Untitled document",
    help: "Help",
    load: {
        error: "The uploaded file is corrupted and cannot be loaded by Scratch For Html..."
    },
    file: {
        title: "File",
        html: "Export to Html",
        open: "Open a file...",
        save: "Save"
    },
    edit: {
        title: "Edit",
        undo: "Undo",
        redo: "Redo",
        clear: "Clear {blockCount} blocks",
        cleanup: "Clean up blocks",
        cleardb: "Clear the database"
    },
    lang: {
        title: "Language"
    },
    examples: {
        title: "Examples",
        confirm: {
            title: "Delete current blocks?",
            text: "Would you like to remove the blocks from the current project before importing the example?",
            cancel: "Cancel",
            yes: "Yes",
            no: "No"
        },
        loaded: "Example {example} successfully imported!",
        ping_pong: "ping-pong command",
        command_parsing: "commands handler",
        leveling: "XP and levels system"
    },
    download: {
        title: "Download your website",
        content: {
            title: "How to start your Website once downloaded?",
            unzipFile: "Unzip the downloaded file.",
            node: "go to replit and create a html template",
            start: "add your html file to the index.html",
            done: "Your website is started!"
        },
        cancel: "Cancel",
        confirm: "Download"
    },
    tour: {
        skip: "Skip tour",
        previous: "Previous",
        next: "Next",
        finish: "Finish",
        steps: {
            load_examples: "Import examples to discover Scratch4Html!",
            run_test: "Test the functionalities of your bot here!",
            export_code: "Export your code here!"
        }
    },
    run_modal: {
        title: "Click Start to test your website!",
        start: "Start the website",
        stop: "Stop the website",
        invalid_token: "Unable to connect to Html... Maybe the website has a error?!",
        error: "Unable to connect to Html... Try again later!",
        disabled: "⚠️ This feature is only available using the Scratch For Html App (get it {here})",
        here: "here"
    },
    code_modal: {
        title: "Html code of your website"
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
};
