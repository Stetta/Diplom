'use strict'
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getStatusPayment = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('statuspayment');
        const list = await pool.request().query(sqlQueries.statuspaymentlist);
        console.log(list)
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getStatusPayment
}