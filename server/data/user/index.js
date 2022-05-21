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
                            .input('userSurname', sql.NVarChar(50), userData.userSurname)
                            .input('userName', sql.NVarChar(50), userData.userName)
                            .input('userPatronymic', sql.NVarChar(50), userData.userPatronymic)
                            .input('userPhoto', sql.VarBinary(sql.MAX), userData.userPhoto)
                            .input('userLogin', sql.NVarChar(30), userData.userLogin)
                            .input('userPassword', sql.NVarChar(30), userData.userPassword)
                            .input('userIdRole', sql.Int, userData.userIdRole)
                            .query(sqlQueries.createUser);
        return insertUser.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getUsers,
    createUser
}