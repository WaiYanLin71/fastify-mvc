import { exportUserList } from "../../controller/CsvController.js"


export default (fastify,opts, done) => {
    fastify.get('/export-user', exportUserList)
    done();
}