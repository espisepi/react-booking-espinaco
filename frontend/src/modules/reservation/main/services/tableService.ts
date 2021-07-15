import { TableApi } from '../../interfaces';
import { fetchWithoutToken } from "../../utils/fetch";

export const getTables = async () => {
    try {
        const resFetch = await fetchWithoutToken('tables', 'GET', null);
        const res = await resFetch.json() as Array<TableApi>;
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const createTable = async ( table: TableApi ) => {
    try {
        const res = await save(table)
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const save = async ( table: TableApi ) => {
    try {
        const resFetch = await fetchWithoutToken(`tables`, 'POST', table );
        const res = await resFetch.json();
        return res;
    } catch (e) {
        console.error(e);
    }
}