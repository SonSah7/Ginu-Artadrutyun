import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.POSTGRESDBNAME,'postgres',process.env.POSTGRESDBPASSWORD,{
    host:'127.0.0.1',
    dialect:'postgres'
})

module.exports = sequelize.define('')

