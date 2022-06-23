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
                    .input('Description', sql.Text, applicationData.Description)
                    .input('IdClient', sql.Int, applicationData.IdClient)
                    .input('IdUser', sql.Int, applicationData.IdUser)
                    .input('IdStatus', sql.Int, applicationData.IdStatus)
                    .input('IdStatusPayment', sql.Int, applicationData.IdStatusPayment)
                    .input('IdType', sql.Int, applicationData.IdType)
                    .input('Name', sql.NVarChar(sql.MAX), applicationData.Name)
                    .input('Activity', sql.NVarChar(sql.MAX), applicationData.Activity)
                    .input('IdStaff', sql.Int, applicationData.IdStaff)
                    .input('IdPricing', sql.Int, applicationData.IdStaff)
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
                        .input('Description', sql.Text, applicationData.Description)
                        .input('IdClient', sql.Int, applicationData.IdClient)
                        .input('IdUser', sql.Int, applicationData.IdUser)
                        .input('IdStatus', sql.Int, applicationData.IdStatus)
                        .input('IdStatusPayment', sql.Int, applicationData.IdStatusPayment)
                        .input('IdType', sql.Int, applicationData.IdType)
                        .query(sqlQueries.updateApplication);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const getApplicationByClient = async (IdClient) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('application');
        const list = await pool.request()
                            .input('IdClient', sql.Int, IdClient)
                            .query(sqlQueries.applicationByClient);                    
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getApplicationByUser = async (IdUser) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('application');
        const list = await pool.request()
                            .input('IdUser', sql.Int, IdUser)
                            .query(sqlQueries.applicationByUser);                    
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateStatusApplication = async (IdApplication, applicationData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('application');
        const update = await pool.request()
                        .input('IdApplication', sql.Int, IdApplication)
                        .input('IdStatus', sql.Int, applicationData.IdStatus)
                        .query(sqlQueries.applicationUpdateStatus);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateStatusPaymentApplication = async (IdApplication, applicationData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('application');
        const update = await pool.request()
                        .input('IdApplication', sql.Int, IdApplication)
                        .input('IdStatusPayment', sql.Int, applicationData.IdStatusPayment)
                        .query(sqlQueries.applicationUpdateStatusPayment);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getApplication,
    createApplication,
    updateApplication,
    getApplicationByClient,
    getApplicationByUser,
    updateStatusApplication,
    updateStatusPaymentApplication
}