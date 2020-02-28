const express = require('express');
const keypair = require('keypair');
const Cryptr = require('cryptr');
require('colors');
const app = express();
const port = 3000;


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, function() {

    console.log('Server running on port: '.cyan + port);

    // USE THIS TO GENERATE KEY PAIR
    //var pair = keypair();
    //console.log(pair);

    // Fixture
    let pair = {
        public: 'im the public key',
        private: 'im the private key'
    };

    // Encrypt private key for saving in db
    console.log(pair.private);

    // Fetch this from the DB!
    const user_password = 'whoismrrobot';

    // Generate new Cryptr instance using user's password
    // https://github.com/MauriceButler/cryptr
    const cryptr = new Cryptr(user_password);

    // Encrypt user's private key for storage in database
    const encryptedString = cryptr.encrypt(pair.private);
    console.log('encryptedString --->'.cyan, encryptedString);

    // Decrypt for retrival
    const decryptedString = cryptr.decrypt(encryptedString);
    console.log('decryptedString --->'.cyan, decryptedString);

});
