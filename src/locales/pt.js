import Blockly from "blockly";

import blocklyMessages from "./pt-BR.json";

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Documento sem nome",
    help: "Ajuda",
    load: {
        error: "O arquivo enviado está corrompido e não pode ser carregado pelo Scratch For Html..."
    },
    file: {
        title: "Arquivo",
        html: "Exporta para Html",
        open: "abrir arquivo...",
        save: "Salva"
    },
    edit: {
        title: "Edita",
        undo: "desfazer",
        redo: "refazer",
        clear: "deleta {blockCount} blocos",
        cleanup: "limpa blocos",
        cleardb: "limpa database"
    },
    lang: {
        title: "linguagem"
    },
    examples: {
        title: "Exemplos",
        confirm: {
            title: "Deleta os blocos atual?",
            text: "Você gostaria de remover os blocos do projeto atual antes de importar o exemplo?",
            cancel: "Cancela",
            yes: "Sim",
            no: "Não"
        },
        loaded: "Exemplo {example} importando com sucesso!",
        ping_pong: "comando ping-pong",
        command_parsing: "handler de comandos",
        leveling: "XP e sistema de níveis"
    },
    download: {
        title: "Instale o seu website",
        content: {
            title: "Como iniciar o seu website depois de baixado?",
            unzipFile: "Descompacte o arquivo baixado.",
            node: "Vai no replit e crie um novo projeto com o template html",
            start: "coloca o seu html.html no index.html",
            done: "Seu website foi iniciado!"
        },
        cancel: "Cancela",
        confirm: "Instala"
    },
    tour: {
        skip: "Pular tour",
        previous: "Anterior",
        next: "Próximo",
        finish: "Termina",
        steps: {
            load_examples: "Importe exemplos para descobrir Scratch4Html!",
            run_test: "Teste as funcionalidades do seu website aqui!",
            export_code: "Exporte seu código aqui!"
        }
    },
    warnings: {
        login_block: "O bloco \"Conectar ao Html\" na categoria \"Base\" é obrigatório."
    },
    run_modal: {
        title: "Clique em Iniciar para testar seu bot!",
        start: "Inicie o website",
        stop: "Pare o website",
        invalid_token: "não foi posivvel carrega o seu website... talvez ele tenha algum error?",
        error: "não foi posivvel carrega o seu website... talvez ele tenha algum error?",
        disabled: "⚠️ Este recurso está disponível apenas usando o aplicativo Scratch For Html (pegue ele {here})",
        here: "aqui"
    },
    code_modal: {
        title: "Código Html do seu website"
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
};
