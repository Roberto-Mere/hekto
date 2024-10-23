function constructFetchQueryParam(name, options) {
  const queryOptions = options.length
    ? options.reduce((acc, curr) => acc + `${curr}|`, '').slice(0, -1)
    : null;
  const fetchQuery = queryOptions ? `${name}_like=(?:${queryOptions})` : '';

  return fetchQuery;
}

export function constructFetchQuery(params) {
  return params
    .map((query) => constructFetchQueryParam(query.name, query.options))
    .reduce((acc, curr) => (curr ? acc + `${curr}&` : acc), '')
    .slice(0, -1);
}
