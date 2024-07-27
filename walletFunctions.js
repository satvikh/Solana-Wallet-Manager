
import bs58 from 'bs58';
import fs from 'fs';
import bip39 from 'bip39';




//generates a seedPhrase can be used to generate multiple wallets
function generateMnemonic(){
    const mnemonic = bip39.generateMnemonic();
    console.log(mnemonic);
    //Reading Json file
    fs.readFile('storedWallets.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        let storedWallets=JSON.parse(data);

        //storing seedphrase in storedWallets.json
        storedWallets.seedPhrase = mnemonic;

        //reconverting JSON
        fs.writeFile('storedWallets.json', JSON.stringify(storedWallets), 'utf8', (err) => {
            if (err) {
            console.error(err);
            return;
            }
            console.log('Seedphrase successfully updated');;
        });
    });
}


//generates x amount of wallets on the solana blockchain and stores the private keys in storedWallets.json
function generateWallets(num){ 
    if (typeof num === 'number'){
        fs.writeFileSync('storedWallets.json', JSON.stringify({}), (err) => {
            if (err){
                throw new Error(err);
        }
        console.log('Wallet file successfully accessed');
    });




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

function distributeFunds(amount, wallets){

    // first need to read files**************

    //create a for loop to iterate through the wallets


    for (let i=0; i<wallets; i++){ 
        
        //check whether sender wallet has funds
        
        
        
            //if sender wallet has funds, send funds to receiver wallet
            
        //otherwise pass to the next wallet and console log an error message
    
    }
}







export {generateMnemonic, generateWallets};