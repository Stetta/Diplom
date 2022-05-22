'use strict'
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getClient = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('client');
        const list = await pool.request().query(sqlQueries.clientlist);
        console.log(list)
        return list.recordset;
    } catch (error) {
        return error.message;
    }

}

const createClient = async (clientData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('client');
        const insertClient = await pool.request()
                            .input('Surname', sql.NVarChar(50), clientData.Surname)
                            .input('Name', sql.NVarChar(50), clientData.Name)
                            .input('Patronymic', sql.NVarChar(50), clientData.Patronymic)
                            .input('Photo', sql.VarBinary(sql.MAX), clientData.Photo)
                            .input('Mail', sql.NVarChar(50), clientData.Mail)
                            .input('Password', sql.NVarChar(30), clientData.Password)
                            .input('RegistrationDate', sql.Date, clientData.RegistrationDate)
                            .input('IdStatusDelete', sql.Int, clientData.IdStatusDelete)
                            .query(sqlQueries.createClient);
        return insertClient.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateClient = async (IdClient, clientData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('client');
        const update = await pool.request()
                        .input('IdClient', sql.Int, IdClient)
                        .input('Surname', sql.NVarChar(50), clientData.Surname)
                        .input('Name', sql.NVarChar(50), clientData.Name)
                        .input('Patronymic', sql.NVarChar(50), clientData.Patronymic)
                        .input('Photo', sql.VarBinary(sql.MAX), clientData.Photo)
                        .input('Mail', sql.NVarChar(50), clientData.Mail)
                        .input('Password', sql.NVarChar(30), clientData.Password)
                        .input('RegistrationDate', sql.Date, clientData.RegistrationDate)
                        .input('IdStatusDelete', sql.Int, clientData.IdStatusDelete)
                        .query(sqlQueries.updateClient);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getClient,
    createClient,
    updateClient
}