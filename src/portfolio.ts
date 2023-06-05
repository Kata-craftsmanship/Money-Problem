import { createMoney, type Currency, type Money } from "./money";

const EUR2USD = 1.2;

export type Portfolio = {
  add: (moneys: Money[]) => void;
  evaluate: (currency: Currency) => Money;
};

export function createPortfolio(): Portfolio {
  const listMoney: Money[] = [];

  const convert = (money: Money, to: Currency) => {
    return money.currency === to ? money.amount : EUR2USD * money.amount;
  };
  return {
    add: (moneys: Money[]) => {
      listMoney.push(...moneys);
    },
    evaluate: (currency: Currency) =>
      createMoney(
        listMoney.reduce((acc, money) => convert(money, currency) + acc, 0),
        currency
      ),
  };
}
