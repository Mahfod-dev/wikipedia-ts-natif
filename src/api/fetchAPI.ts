import { Wikiapi } from "../types/api";



const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch`

export const fetchAPI = async (searchTerm:string):Promise<Wikiapi> => {
    const response = await fetch(`${url}=${searchTerm}`);
    const data:Wikiapi = await response.json();
    return data;
    };

