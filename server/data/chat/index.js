'use strict'
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getChat = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('chat');
        const list = await pool.request().query(sqlQueries.chatlist);
        console.log(list)
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const createChat= async (chatData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('chat');
        const insertChat= await pool.request()
                            .input('Date', sql.Date, chatData.Date)
                            .input('IdUser', sql.Int, chatData.IdUser)
                            .input('IdClient', sql.Int, chatData.IdClient)
                            .input('IdApplication', sql.Int, chatData.IdApplication)
                            .input('Text', sql.Text, chatData.Text)
                            .input('Photo', sql.VarBinary(sql.MAX), chatData.Photo)
                            .query(sqlQueries.createChat);
        return insertChat.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateChat = async (IdChat, chatData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('chat');
        const update = await pool.request()
                        .input('IdChat', sql.Int, IdChat)
                        .input('Date', sql.Date, chatData.Date)
                        .input('IdUser', sql.Int, chatData.IdUser)
                        .input('IdClient', sql.Int, chatData.IdClient)
                        .input('IdApplication', sql.Int, chatData.IdApplication)
                        .input('Text', sql.Text, chatData.Text)
                        .input('Photo', sql.VarBinary(sql.MAX), chatData.Photo)
                        .query(sqlQueries.updateChat);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const getChatByClient = async (IdClient) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('chat');
        const list = await pool.request()
                            .input('IdClient', sql.Int, IdClient)
                            .query(sqlQueries.chatByClient);                    
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getChatByUser = async (IdApplication) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('chat');
        const list = await pool.request()
                            .input('IdApplication', sql.Int, IdApplication)
                            .query(sqlQueries.chatByUser);                    
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getChat,
    createChat,
    updateChat,
    getChatByClient,
    getChatByUser
}