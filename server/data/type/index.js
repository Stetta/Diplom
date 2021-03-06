'use strict'
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getType = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('type');
        const list = await pool.request().query(sqlQueries.typelist);
        console.log(list)
        return list.recordset;
    } catch (error) { 
        return error.message;
    }
}

module.exports = {
    getType
}