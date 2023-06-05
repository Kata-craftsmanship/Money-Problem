import { describe, expect, it } from "vitest";
import { createMoney } from "../src/Money";

describe("Money Calculator Test", () => {
  it("5 USD * 2 = 10 USD", () => {
    //Given
    const fiveDollar = createMoney(5, "USD");
    //When
    expect(fiveDollar.times(2).toEqual(createMoney(10, "USD")));
    //Then
  });

  it("10 EURO * 3 = 10 EURO", () => {
    //Given
    const tenEuro = createMoney(10, "EUR");
    //When
    expect(tenEuro.times(3).toEqual(createMoney(30, "EUR")));
    //Then
  });
});
