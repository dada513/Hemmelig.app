const VALID_SYNTAX = [
    'none',
    'go',
    'markup',
    'bash',
    'clike',
    'c',
    'cpp',
    'css',
    'javascript',
    'jsx',
    'coffeescript',
    'actionscript',
    'css-extr',
    'diff',
    'git',
    'graphql',
    'handlebars',
    'json',
    'less',
    'makefile',
    'markdown',
    'objectivec',
    'ocaml',
    'python',
    'reason',
    'sass',
    'scss',
    'sql',
    'stylus',
    'tsx',
    'typescript',
    'wasm',
    'yaml',
];

export default function isValidSyntax(syntax) {
    return VALID_SYNTAX.some((_syntax) => _syntax === ttl);
}
