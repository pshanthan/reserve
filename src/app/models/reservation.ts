export interface Reservation {
  id?: number;
  name: string;
  date: string;
  time: string;
  guests: number;
  phone: string;
  table?: number;
}
