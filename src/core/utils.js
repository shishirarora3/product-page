import { fbSearchUrl  } from './urls';
import qs from 'qs';

/* Returns query string with object's key values pairs as
?key1=value1&key2=value2 and so-on */
export function stringifyQueryParams(obj) {
  let queryString = '';
  // To-Do  Please remove filter and map chaining , It can be done with
  // single iteration .
  Object.keys(obj).filter((key) => {
    return (!!obj[key] !== false);
  }).map((key) => {
    return (queryString += `${key}=${obj[key]}&`);
  });
  return queryString.length ? `?${queryString.substr(0, queryString.length - 1)}` : '';
}



export function getParameterByName(names, urls) {
  let url = urls;
  let name = names;
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


// Todo - write in comments the accept and return format.
export const getFormattedDate = (date) => {
  const year = date.getFullYear();
  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : `0${month}`;
  let day = date.getDate().toString();
  day = day.length > 1 ? day : `0${day}`;
  return `${day}/${month}/${year}`;
};

export const addParamToUrl = (relativeUrl, queryParam) => {
  const kvp = relativeUrl.split('?');
  let existing = {};
  if (kvp.length > 1) {
    existing = qs.parse(kvp[1]);
  }
  existing = { ...existing, ...queryParam };
  return `${kvp[0]}?${qs.stringify(existing)}`;
};




export const addExtraParams = (url) => {

};
