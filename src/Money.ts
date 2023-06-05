export type Currency = "EUR" | "USD" | "KRW";

export type Money = {
  currency: Currency;
  amount: number;
  times: (multiplier: number) => Money;
  divide: (divider: number) => Money;
  toEqual: (money: Money) => boolean;
};

export function createMoney(amount: number, currency: Currency): Money {
  const times = (multiplier: number) =>
    createMoney(amount * multiplier, currency);
  return {
    amount: amount,
    currency: currency,
    times: times,
    divide: (divider: number) => times(1 / divider),
    toEqual: (money: Money) =>
      money.amount === amount && money.currency === currency,
  };
}
