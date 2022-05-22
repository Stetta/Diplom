'use strict'
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getStatusDelete = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('statusdelete');
        const list = await pool.request().query(sqlQueries.statusdeletelist);
        console.log(list)
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getStatusDelete
}