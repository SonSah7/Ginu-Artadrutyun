import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(process.env.POSTGRESDBNAME,'postgres',process.env.POSTGRESDBPASSWORD,{
    host:'127.0.0.1',
    dialect:'postgres'
})

// export const model = sequelize.define('')

