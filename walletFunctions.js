import bs58 from 'bs58'

//generates a seedPhrase can be used to generate multiple wallets
function generateMnemonic(){
    const mnemonic = bip39.generateMnemonic();
    storedWallets.json['rootWallet'] = mnemonic;
}


//generates x amount of wallets on the solana blockchain and stores the private keys in storedWallets.json
function generateWallets(num){ 
    if (typeof num === 'number'){
        const mnemonic = storedWallets.json[mnemonic];


        const seed = bip39.mnemonicToSeedSync(mnemonic); // (mnemonic, password)
        for (let i = 0; i < num; i++) {
            let walletName = `wallet${i}`;
            const path = `m/44'/501'/${i}'/0'`;
            const keypair = Keypair.fromSeed(derivePath(path, seed.toString("hex")).key);

            //formatting public and private keys from keypair
            const publicKey=keypair.publicKey.toBase58()
            const privateKey=bs58.encode(keypair.secretKey);

            //adds wallets with their public key and keypair to storedWallets.json
            storedWallets.json[`walletName`]={publicKey : privateKey};


            //Confirming successful wallet generation
            console.log(`${walletName} generated successfully`);
            console.log(`${path} => ${publicKey}`);
        }
    }    
}

//checks the balance of all wallets in storedWallets.json
function checkBalance(){

}

function distributeFunds(){
    for (let i=0; i<storedWallets.json.length-1; i++){ //added a -1 because the first wallet will be the seedphrase wallet
        //send funds to each wallet

    }
}
