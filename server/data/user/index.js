'use strict'
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getUsers = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const list = await pool.request().query(sqlQueries.userslist);
        console.log(list)
        return list.recordset;
    } catch (error) {
        return error.message;
    }

}

const createUser = async (userData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const insertUser = await pool.request()
                            .input('Surname', sql.NVarChar(50), userData.Surname)
                            .input('Name', sql.NVarChar(50), userData.Name)
                            .input('Patronymic', sql.NVarChar(50), userData.Patronymic)
                            .input('Photo', sql.VarBinary(sql.MAX), userData.Photo)
                            .input('Login', sql.NVarChar(50), userData.Login)
                            .input('Password', sql.NVarChar(30), userData.Password)
                            .input('IdRole', sql.Int, userData.IdRole)
                            .query(sqlQueries.createUser);
        return insertUser.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUser = async (IdUser, userData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const update = await pool.request()
                        .input('IdUser', sql.Int, IdUser)
                        .input('Surname', sql.NVarChar(50), userData.Surname)
                        .input('Name', sql.NVarChar(50), userData.Name)
                        .input('Patronymic', sql.NVarChar(50), userData.Patronymic)
                        .input('Photo', sql.VarBinary(sql.MAX), userData.Photo)
                        .input('Login', sql.NVarChar(50), userData.Login)
                        .input('Password', sql.NVarChar(30), userData.Password)
                        .input('IdRole', sql.Int, userData.IdRole)
                        .query(sqlQueries.updateUser);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser
}