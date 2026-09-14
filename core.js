export function metrics({price,eps,revenue,previousRevenue,freeCashFlow}) {
 for(const x of [price,eps,revenue,previousRevenue,freeCashFlow]) if(!Number.isFinite(x)) throw new Error('All metrics must be finite numbers.');
 if(price<=0||revenue<0||previousRevenue<=0) throw new Error('Price and previous revenue must be positive; revenue cannot be negative.');
 return {pe:eps>0?price/eps:null,revenueGrowth:(revenue/previousRevenue-1)*100,fcfMargin:revenue>0?freeCashFlow/revenue*100:null};
}
