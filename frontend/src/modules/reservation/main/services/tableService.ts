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