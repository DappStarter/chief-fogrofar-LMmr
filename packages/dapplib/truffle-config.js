require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush stool dash oven evil grid argue metal gentle'; 
let testAccounts = [
"0x28b4442abb5d12f9e3c6324f36c564a06be56bc4734ef202e0e67a9dfc9bfa1e",
"0x3afea85559bd1685b7774ac2f74f1948fb949d6413d9f1cfadf3a5c930cb63c1",
"0x5699aee551fdf955d32eeeebafd0c48f79e1ebcc0a7fbd50cc15d6a98e2e4f1f",
"0x978d73e3e5dd5535c13c7bb453c45afb09fbbb733df87433d49f1e0a0944bc96",
"0x77dd04ab765aa5bb6c5d0cb144544e246b6910f083fb65962d714e00dd159856",
"0x820f0061a5eb94edb089d7ae262a0c6ff2286d63d84b346663e2c2a7a70f072d",
"0x4c7f51bd32aa93c5cb8c3b78875668c40e4dda16b795d5340d4f9e8d117dab3f",
"0x9d917ad54ca64977c693cbd6aec1b4749a7bcb524364b66c0d5fc14b583196ef",
"0xcc30aa6e78309e5af69c4a1e345cac411f0489844457617abb0a09684e6d2069",
"0x839436f3fb4affac750e22726c65e93747acbbe0a4acc592fef6df19e722608a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

