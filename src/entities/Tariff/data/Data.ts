export type TariffType = 'Basic' | 'Standart' | 'Premium';

export interface TariffData {
  id: number;
  title: string;
  price: number;
  duration: number;
  unitsDuration: 'month' | 'hour';
  privilege: string[];
}

export const TariffArray: TariffData[] = [
  {
    id: 0,
    title: 'Hourly\npayment',
    price: 1.9,
    duration: 1,
    unitsDuration: 'hour',
    privilege: ['Catalog of games', 'Virtual PC', 'Unlimited gaming session'],
  },
  {
    id: 1,
    title: 'Subscription\nMaximum',
    price: 49.9,
    duration: 1,
    unitsDuration: 'month',
    privilege: ['Catalog of games', 'Virtual PC', 'Game session 10 hours/day'],
  },
  {
    id: 2,
    title: 'Subscription\nMinimum',
    price: 15.9,
    duration: 1,
    unitsDuration: 'month',
    privilege: ['Catalog of games', 'Game session 4 hours/day'],
  },
];
