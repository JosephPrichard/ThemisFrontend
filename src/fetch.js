import axios from "axios";
import useSWR from "swr";

const URL = "https://themis-hdfw22.herokuapp.com/";

export const config = {
    withCredentials: false,
    baseURL: URL
};

export const fetcher = (url) => axios.get(url, config).then(r => r.data);

const options = {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateOnReconnect: true,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0
};

export const useFetch = (url) => {
    return useSWR(url, fetcher, options);
};