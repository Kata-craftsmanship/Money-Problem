import { describe, expect, it } from "vitest";
import { createMoney } from "../src/money";
import { createPortfolio } from "../src/portfolio";

describe("Money Calculator Test", () => {
  it("5 USD * 2 = 10 USD", () => {
    //Given
    const fiveDollar = createMoney(5, "USD");
    //When Then
    expect(fiveDollar.times(2).toEqual(createMoney(10, "USD"))).toBeTruthy();
  });

  it("10 EURO * 3 = 10 EURO", () => {
    //Given
    const tenEuro = createMoney(10, "EUR");
    //When Then
    expect(tenEuro.times(3).toEqual(createMoney(30, "EUR"))).toBeTruthy();
  });

  it("4002 KRW / 5 = 1000.5 KRW", () => {
    //Given
    const KRW4002 = createMoney(4002, "KRW");
    //When Then
    expect(KRW4002.divide(4).toEqual(createMoney(1000.5, "KRW"))).toBeTruthy();
  });

  it("5 USD + 10 USD = 15 USD", () => {
    //Given
    const fiveDollar = createMoney(5, "USD");
    const tenDollar = createMoney(10, "USD");
    const portfolio = createPortfolio();
    portfolio.add([fiveDollar, tenDollar]);
    //When Then
    expect(
      portfolio.evaluate("USD").toEqual(createMoney(15, "USD"))
    ).toBeTruthy();
  });

  it("5 USD + 10 EUR = 17 USD", () => {
    //Given
    const fiveDollar = createMoney(5, "USD");
    const tenEuro = createMoney(10, "EUR");
    const portfolio = createPortfolio();
    portfolio.add([fiveDollar, tenEuro]);
    //When Then
    expect(
      portfolio.evaluate("USD").toEqual(createMoney(17, "USD"))
    ).toBeTruthy();
  });

  it("1 USD + 1100 KRW = 2200 KRW", () => {
    //Given
    const oneDollar = createMoney(1, "USD");
    const krw1100 = createMoney(1100, "KRW");
    const portfolio = createPortfolio();
    portfolio.add([oneDollar, krw1100]);
    console.log(portfolio.evaluate("KRW").toEqual);
    //When Then
    expect(
      portfolio.evaluate("KRW").toEqual(createMoney(2200, "KRW"))
    ).toBeTruthy();
  });
});
