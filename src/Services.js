import { Subject } from 'rxjs';

const stockListSubject = new Subject();

export const stockListService = {
    sendStocks: stock => stockListSubject.next({ stock: stock }),
    clearStocks: () => stockListSubject.next(),
    getStocks: () => stockListSubject.asObservable()
};

const allStocksSubject = new Subject();

export const allStocksService = {
    sendStock: stock => { 
        const newStock = { ...stock, finalValue: new Intl.NumberFormat('pt').format(stock.quantity * stock.price) };
        allStocksSubject.next({ stock: newStock });
    },
    clearStocks: () => allStocksSubject.next(),
    getStocks: () => allStocksSubject.asObservable()
};

const finalValueSubject = new Subject();

export const finalValueStocksService = {
    sendStocks: stocks => {
        let finalValue = 0;
        stocks.map(stock => finalValue += stock.quantity * stock.price);
        finalValueSubject.next({ finalValue: finalValue });
    },
    clearFinalValue: () => finalValueSubject.next(),
    getFinalValue: () => finalValueSubject.asObservable()
};

const newInvestmentSubject = new Subject();

export const newInvestmentService = {
    sendNewValue: value => newInvestmentSubject.next({ value: value }),
    getNewValue: () => newInvestmentSubject.asObservable()
};

const newBuysSubject = new Subject();

export const newBuysService = {
    sendNewStocks: (stocks, previousFinalValue, newInvestment) => {
        let newStocks = [];
        stocks.map(stock => {
            const newQuantity = (stock.quantity * newInvestment) / previousFinalValue;
            newStocks.push({ ...stock, newQuantity: parseInt(newQuantity) });
            return stock;
        });
        finalValueNewInvestmentService.sendStocks([...newStocks])
        newBuysSubject.next({ stocks: newStocks });
    },
    getNewStocks: () => newBuysSubject.asObservable()
}

const finalValueNewInvestmentSubject = new Subject();

export const finalValueNewInvestmentService = {
    sendStocks: stocks => {
        let finalValue = 0;
        stocks.map(stock => finalValue += stock.newQuantity * stock.price);
        finalValueNewInvestmentSubject.next({ finalValue: finalValue });
    },
    clearFinalValue: () => finalValueNewInvestmentSubject.next(),
    getFinalValue: () => finalValueNewInvestmentSubject.asObservable()
};