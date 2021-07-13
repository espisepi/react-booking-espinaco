import { Table } from '../../interfaces/Interfaces';
import { fetchWithoutToken } from "../../utils/fetch";

export const getTables = async () => {
    try {
        const resFetch = await fetchWithoutToken('tables', 'GET', null);
        const res = await resFetch.json() as Array<Table>;
        return res;
    } catch (e) {
        console.error(e);
    }
}