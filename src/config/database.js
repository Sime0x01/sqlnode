module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'admin',
    password: 'admin@123',
    database: 'sqlnode',
    define: {
        timestamp: true,    // created_at, updated_at
        underscored: true,  // use snake case
    },
};