import { Currency } from "./money";

const EUR2USD = 1.2;
const USD2KRW = 1100;
const EUR2KRW = 1344;

type Exchange = Record<Currency, Record<Currency, number>>;

export const exchange: Exchange = {
  EUR: { USD: EUR2USD, KRW: EUR2KRW, EUR: 1 },
  USD: { EUR: 1 / EUR2USD, KRW: USD2KRW, USD: 1 },
  KRW: { EUR: 1 / EUR2KRW, USD: 1 / USD2KRW, KRW: 1 },
};