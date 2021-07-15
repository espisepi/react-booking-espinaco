
export interface Reservation {
    date: Date; // Date and Time
    name: String;
    phone: String;
    email: String;
}

export interface Table {
    name: String;
    capacity: String;
    location: String;
    reservation?: Reservation;
}

export interface Search {
    date: Date;
    time: String; // "09:00" || "10:00" || "11:00" ...
    location: String; // "outside" || "inside" ...
    capacity: String; // "1" || "2" || "3" ...
}

export interface ReservationState {
    search: Search;
    active: Reservation;
    loading: Boolean;
    error?: Error
}

export interface CustomAction {
    type: String,
    payload: any
}


// Redux State ---------------------------

export interface TableListState {
    list: Array<Table>;
    loading: Boolean;
    error?: Error;
}

// export interface TableListState, TableCreateState, TableUpdateState, TableDeleteState
