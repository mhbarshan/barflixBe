const mongoose = require('mongoose');
const { Schema } = mongoose;
const channelSchema = new Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        auto: true
    },
    name:{
        type: String,
        required: true
    },
    iUrl:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
   
}
);

module.exports = mongoose.model('channels',channelSchema)