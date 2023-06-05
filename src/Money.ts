type Currency = "EUR" | "USD";

export type Money = {
  devise: Currency;
  amount: number;
  times: (multiplier: number) => Money;
  toEqual: (money: Money) => boolean;
};

export function createMoney(amount: number, devise: Currency): Money {
  return {
    amount: amount,
    devise: devise,
    times: (multiplier: number) => createMoney(amount * multiplier, devise),
    toEqual: (money: Money) => money.amount === amount && money.devise === devise,
  };
}
