var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

function encrypt(text) {
	try
	{
		if (text === null || typeof text === 'undefined') { return text; };
		var cipher = crypto.createCipher('aes-256-cbc', process.env.ENCRYPTED_KEY);
		var crypted = cipher.update(text,'utf8','hex');
		crypted += cipher.final('hex');
	}
	catch(err)
	{}
	return crypted;
}

function decrypt(text) {
	try
	{

		if (text === null || typeof text === 'undefined') {return text;};
		var decipher = crypto.createDecipher('aes-256-cbc', process.env.ENCRYPTED_KEY);
		var dec = decipher.update(text,'hex','utf8');
		dec += decipher.final('utf8');
	}	
	catch(err)
	{}	
	return dec;
}

var usersDetails = new Schema(
{
	firstname:String,
	lastname:String,
	mobile:Number,
	email:String,
	password:String,
	profilepic:String,
	groups:[{name:String,id:String,role:String}]
});

usersDetails.set('toJSON', { getters: true, setters: true});
usersDetails.set('toObject', { getters: true, setters: true });


mongoose.model('usersDetails', usersDetails);