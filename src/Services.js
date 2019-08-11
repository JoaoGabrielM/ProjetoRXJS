import { Subject } from 'rxjs';

const subject = new Subject();

export const stockListService = {
    sendStocks: stock => subject.next({ stock: stock }),
    clearStocks: () => subject.next(),
    getStocks: () => subject.asObservable()
};

const pieSubject = new Subject();

export const pieChartService = {
    sendStock: stock => { 
        const newStock = { code: stock.code, finalValue: stock.quantity * stock.price };
        pieSubject.next({ stock: newStock });
    },
    clearStocks: () => pieSubject.next(),
    getStocks: () => pieSubject.asObservable()
}

const finalValueSubject = new Subject();

export const finalValueStocks = {
    sendStocks: stocks => {
        let finalValue = 0;
        stocks.map(stock => finalValue += stock.quantity * stock.price);
        finalValueSubject.next({ finalValue: finalValue });
    },
    clearFinalValue: () => finalValueSubject.next(),
    getFinalValue: () => finalValueSubject.asObservable()
}