const passport = require('passport');
const {Strategy} = require('passport-local').Strategy;
const {User, Role, Permission} = require('../models');
const md5 = require('md5');

//this function is called an authenticate to test if the user's credentials are valid
async function verifyUser(username, password, done) {

}