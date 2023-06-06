import { exchange } from "./bank";
import { createMoney, type Currency, type Money } from "./money";


export type Portfolio = {
  add: (moneys: Money[]) => void;
  evaluate: (currency: Currency) => Money;
};

export function createPortfolio(): Portfolio {
  const listMoney: Money[] = [];

  const convert = (money: Money, to: Currency) =>
    exchange[to][money.currency] * money.amount;

  return {
    add: (moneys) => {
      listMoney.push(...moneys);
    },
    evaluate: (currency) =>
      createMoney(
        listMoney.reduce((acc, money) => convert(money, currency) + acc, 0),
        currency
      ),
  };
}
