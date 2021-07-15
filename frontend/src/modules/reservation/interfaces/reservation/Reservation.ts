import Table from '../table/Table';

export default interface Reservation {
    id: String;
    date: Date; // Date and Time
    name: String;
    phone: String;
    email: String;
    table: Table
}