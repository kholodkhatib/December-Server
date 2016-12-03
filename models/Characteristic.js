/**
 * Created by kholod on 12/3/2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CharacteristicModel = new Schema({

    "title": {
        type: String,
        description: "title of the Characteristic"
    }
    ,
    "description": {
        type: String,
        description: "description of the Characteristic"
    },
    "value":{
        type:String,
        enum: ['High', 'Medium','Low']
    },
    "isAnonymous":{
        type:Boolean
    },
    "Status":{
        type:String,
        enum:['OnWorking','Ignored','Done']
    },
    "senderUser":{
     type: Schema.Types.ObjectId,
     ref: 'User'  // can be system
     },
     "receiverUser":{
     type: Schema.Types.ObjectId,
     ref: 'User'
     }


});

//this will expose the the "bookModel" we defined above under the name "Book" to other JS files to use it under node.js
module.exports = mongoose.model('Characteristic', CharacteristicModel);