const dbConfig = {
    user: 'db_user',
    password: 'Erlz1278A',
    server: 'elementalserver.servehttp.com',
    database: 'FantasyCompanion'
};
const localDbConfig = {
    driver: 'msnodesqlv8',
    database: 'FantasyCompanion',
    server: '(LocalDB)\MSSQLLocalDB',
    options: {
        trustedConnection: true,
    }
};
module.exports.dbConfig = dbConfig;
module.exports.localDbConfig = localDbConfig;