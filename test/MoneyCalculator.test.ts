import { describe, expect, it } from "vitest";
import { Money, createMoney } from "../src/money";
import { createPortfolio } from "../src/portfolio";

describe("Money Calculator Test", () => {
  const expectEqualMoney = (money1: Money, money2: Money) => {
    expect(money1.amount).toEqual(money2.amount);
    expect(money1.currency).toEqual(money2.currency);
  };
  it("5 USD * 2 = 10 USD", () => {
    //Given
    const fiveDollar = createMoney(5, "USD");
    //When Then
    expectEqualMoney(fiveDollar.times(2), createMoney(10, "USD"));
  });

  it("10 EURO * 3 = 10 EURO", () => {
    //Given
    const tenEuro = createMoney(10, "EUR");
    //When Then
    expectEqualMoney(tenEuro.times(3), createMoney(30, "EUR"));
  });

  it("4002 KRW / 5 = 1000.5 KRW", () => {
    //Given
    const KRW4002 = createMoney(4002, "KRW");
    //When Then

    expectEqualMoney(KRW4002.divide(4), createMoney(1000.5, "KRW"));
  });

  it("5 USD + 10 USD = 15 USD", () => {
    //Given
    const fiveDollar = createMoney(5, "USD");
    const tenDollar = createMoney(10, "USD");
    const portfolio = createPortfolio();
    portfolio.add([fiveDollar, tenDollar]);
    //When Then
    expectEqualMoney(portfolio.evaluate("USD"), createMoney(15, "USD"));
  });

  it("5 USD + 10 EUR = 17 USD", () => {
    //Given
    const fiveDollar = createMoney(5, "USD");
    const tenEuro = createMoney(10, "EUR");
    const portfolio = createPortfolio();
    portfolio.add([fiveDollar, tenEuro]);
    //When Then
    expectEqualMoney(portfolio.evaluate("USD"), createMoney(13.333333333333334, "USD"));
  });

  it("1 USD + 1100 KRW = 2200 KRW", () => {
    //Given
    const oneDollar = createMoney(1, "USD");
    const krw1100 = createMoney(1100, "KRW");
    const portfolio = createPortfolio();
    portfolio.add([oneDollar, krw1100]);
    //When Then
    expectEqualMoney(portfolio.evaluate("KRW"), createMoney(1100.000909090909, "KRW"));
  });
});
