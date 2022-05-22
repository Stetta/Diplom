'use strict'
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getApplication = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('application');
        const list = await pool.request().query(sqlQueries.applicationlist);
        console.log(list)
        return list.recordset;
    } catch (error) {
        return error.message;
    }

}

const createApplication = async (applicationData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('application');
        const insertApplication = await pool.request()
                    .input('Name', sql.NVarChar(50), applicationData.Name)
                    .input('Description', sql.Text, applicationData.Description)
                    .input('IdClient', sql.Int, applicationData.IdClient)
                    .input('IdUser', sql.Int, applicationData.IdUser)
                    .query(sqlQueries.createApplication);
        return insertApplication.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateApplication = async (IdApplication, applicationData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('application');
        const update = await pool.request()
                        .input('IdApplication', sql.Int, IdApplication)
                        .input('Name', sql.NVarChar(50), applicationData.Name)
                        .input('Description', sql.Text, applicationData.Description)
                        .input('IdClient', sql.Int, applicationData.IdClient)
                        .input('IdUser', sql.Int, applicationData.IdUser)
                        .query(sqlQueries.updateApplication);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getApplication,
    createApplication,
    updateApplication
}