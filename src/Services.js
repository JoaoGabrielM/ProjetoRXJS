import { Subject } from 'rxjs';

const subject = new Subject();

export const stockListService = {
    sendStocks: stock => subject.next({ stock: stock }),
    clearStocks: () => subject.next(),
    getStocks: () => subject.asObservable()
};