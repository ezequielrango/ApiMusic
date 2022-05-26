const bcryptjs = require('bcryptjs');
const { param } = require('express/lib/request');



/**
 * Pass sin encrypt
 * @param {*} passwordPlain
 */


const encrypt =  async (passwordPlain) => {

    const hash = await  bcryptjs.hash(passwordPlain,10);
    return hash;
};



/**
 * Pass sin encrypt && con hash
 * @param {*} passwordPlain
 *  @param {*} hashPassword
 */
const compare = async (passwordPlain,hashPassword) => {

    return await bcryptjs.compare(passwordPlain,hashPassword);
};


module.exports = {encrypt,compare};