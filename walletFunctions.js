//generates a seedPhrase can be used to generate multiple wallets
function generateMnemonic(){
    const mnemonic = bip39.generateMnemonic();
    storedWallets.json[mnemonic] = mnemonic;
}


//generates x amount of wallets on the solana blockchain and stores the private keys in storedWallets.json
function generateWallets(num){
    if (typeof num === 'number'){
        const mnemonic = storedWallets.json[mnemonic];


        const seed = bip39.mnemonicToSeedSync(mnemonic, ""); // (mnemonic, password)
        for (let i = 0; i < num+1; i++) {
            const path = `m/44'/501'/${i}'/0'`;
            const keypair = Keypair.fromSeed(derivePath(path, seed.toString("hex")).key);

            storedWallets.json[`wallet${i}`]={[keypair.publicKey] : keypair};
            console.log(`${path} => ${keypair.publicKey.toBase58()}`);
}





        //Generating wallets
        for (let i=0; i<num; i++){
            
            
            //Generating a wallet name
            let walletName = `wallet ${i}`;
            

            

            //Storing wallet information in .json file

           
            //Confirming successful wallet generation
            console.log(`${walletName} generated successfully`);
        }

    }
    
}

//checks the balance of all wallets in storedWallets.json
function checkWallets(){

}


