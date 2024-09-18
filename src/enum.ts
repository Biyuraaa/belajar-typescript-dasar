export enum CustomerType {
  REGULER,
  GOLD,
  PLATINUM,
}

export type Customer = {
  id: string;
  name: string;
  type: CustomerType;
};
