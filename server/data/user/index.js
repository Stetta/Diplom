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
                            .input('Photo', sql.NVarChar(sql.MAX), userData.Photo)
                            .input('Login', sql.NVarChar(50), userData.Login)
                            .input('Password', sql.NVarChar(100), userData.Password)
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
                        .input('Photo',  sql.NVarChar(sql.MAX), userData.Photo)
                        .input('Login', sql.NVarChar(50), userData.Login)
                        .input('Password', sql.NVarChar(100), userData.Password)
                        .input('IdRole', sql.Int, userData.IdRole)
                        .query(sqlQueries.updateUser);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}
const getByIdUser = async (IdUser) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const oneUser = await pool.request()
                            .input('IdUser', sql.Int, IdUser)
                            .query(sqlQueries.userbyId);
        return oneUser.recordset;
    } catch (error) {
        return error.message;
    }
}
const getByLoginUser = async (Login) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const oneUser = await pool.request()
                            .input('Login', sql.NVarChar(30), Login)
                            .query(sqlQueries.userByLogin);
        return oneUser.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteUser = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const update = await pool.request()
                        .input('IdUser', sql.Int, id)
                        .query(sqlQueries.deleteUser);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    getByIdUser,
    getByLoginUser,
    deleteUser
}