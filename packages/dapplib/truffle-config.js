require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remember unveil harvest glory bottom true'; 
let testAccounts = [
"0xa271321ea111e1cfe59a7c6dfd6c2311c71391976e38cb1f9bc996f26fb808fb",
"0x5e6042ba8ac2ccc11a49f664ff32b4a08554eba9aa28fc016b7c3e8abd1e7d17",
"0x878b4321ad89b7a384aa038f9e9992ef0b1f18024eb740e07ca402864a40fd15",
"0x0cd534a800bbaa9397c8deba20e0591081392e903d867658013f6f0cc42802a6",
"0x271cdf394c47023434062333a8725c1bb67302a7d096ef1c73990319a9fad39d",
"0x9f7f604391603176336ac3a7fb21881f920eaaeb517ed11d53c43ec67987ff02",
"0x1d5fb1d48b960a9ee4ff44c013c81c1e887509f97038e402573fb46893d99e99",
"0xa91a43dd9d94c2f966d4c2a39418cdbd5401aee0e6613f7271578de62c8f1428",
"0xbcd2f510bb9360532b8d5f3d6adf26448e4f76e280b274c5f2f93ac8ffd6f73b",
"0x2559893b246703a12343d987ae817b306b11db6996c8b66288020e76c0a46a1e"
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

