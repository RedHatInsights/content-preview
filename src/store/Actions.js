import * as ActionTypes from '../AppConstants';

import API from '../Utilities/Api';

const fetchData = async (url, headers, options) => {
    if ((url.indexOf('localhost') > 0 || url.indexOf('custom') > 0) && url.indexOf('detail') < 1 && url.indexOf('hits') > 0)
    {
    const response_0 = await API.get('https://rehearse.usersys.redhat.com:8090/hits/', headers, options);
    return response_0.data;
    }
    const response = await API.get(url, headers, options);
    if (url.indexOf('hits') > 0 && url.indexOf('detail') > 0)
    {
       if (url.indexOf('localhost') > 0)
       {
        const response2 = await API.get(url.replace('http://localhost:8080', 'https://rehearse.usersys.redhat.com:8090'), headers, options);
    const merged = response.data.concat(response2.data);
    return merged;
      }
      if (url.indexOf('custom') > 0)
        {
        const response2 = await API.get(url.replace('https://custom.server.org:8090', 'https://rehearse.usersys.redhat.com:8090'), headers, options);
       const merged = response.data.concat(response2.data)
       return merged;
      }
    }

    return response.data;
};

export const fetchContent = (options) => ({
    type: ActionTypes.CONTENT_FETCH,
    payload: fetchData(ActionTypes.CONTENT_FETCH_URL, {}, options)
});
export const fetchContentHits = (options) => ({
    type: ActionTypes.CONTENT_HITS_FETCH,
    payload: fetchData(ActionTypes.CONTENT_HITS_FETCH_URL, {
        Accept: 'application/json'
    }, options)
});
export const fetchContentDetails = (options) => ({
    type: ActionTypes.CONTENT_DETAILS_FETCH,
    payload: fetchData(`${ActionTypes.CONTENT_DETAILS_FETCH_URL}${options.name}`, {})
});
export const fetchContentDetailsHits = (options) => ({
    type: ActionTypes.CONTENT_DETAILS_HITS_FETCH,
    payload: fetchData(`${ActionTypes.CONTENT_DETAILS_HITS_FETCH_URL}${options.name}`, {
        Accept: 'application/json'
    })
});
export const fetchPyData = (options) => ({
    type: ActionTypes.PY_DATA_FETCH,
    payload: fetchData(`${ActionTypes.PY_DATA_FETCH_URL}${options.name}`, {})
});
export const setBaseUrl = (url) => ({
    type: ActionTypes.URL_SET,
    payload: url
});
