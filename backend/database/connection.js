const ibmdb = require('ibm_db');
const stringConection = require('../configDB');
 
const connection = `DATABASE=${stringConection.database_name};HOSTNAME=${stringConection.database_host};UID=${stringConection.database_user};PWD=${stringConection.database_password};PORT=${stringConection.database_port};PROTOCOL=${stringConection.database_protocol}`

var conn = ibmdb.openSync(connection,{connetTimeout: 40, systemNaming: true});

module.exports = conn;

