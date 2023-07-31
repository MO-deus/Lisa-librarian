// const openai = require('openai')
require("dotenv").config();

// console.log(process.env.OPENAI_API_KEY);

export const getBotRsp =(msg) => {
    var final_msg = "bot msg : " + msg
    return final_msg
}
