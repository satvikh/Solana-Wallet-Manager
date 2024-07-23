//generates x amount of wallets on the solana blockchain and stores the private keys in storedWallets.json


function generateWallets(num){
    if (typeof num === 'number'){

        storedWallets.json[walletGroup]=
        const mnemonic = bip39.generateMnemonic();
        storedWallets.json['mnemonic']=mnemonic

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


