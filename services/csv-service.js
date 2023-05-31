import { createObjectCsvStringifier } from 'csv-writer'
class CsvService {
    data = [];
    constructor(data) {
        this.data = data;
    }

    wrirte() {
        const csvStringifier = createObjectCsvStringifier({
            header: [
                {id:'_id', title:'ID'},
                {id:'name', title:'Name'},
                {id:'email', title:'Email'},
                {id:'password', title:'Password'},
            ]
        });
        const header = csvStringifier.getHeaderString();
        return header + csvStringifier.stringifyRecords(this.data)
    }
}

export default CsvService;