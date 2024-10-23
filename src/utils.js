function constructFetchQueryParam(name, options) {
  const queryOptions = options.length
    ? options.reduce((acc, curr) => acc + `${curr}|`, '').slice(0, -1)
    : null;
  const fetchParam = queryOptions ? `${name}_like=(?:${queryOptions})` : '';

  return fetchParam;
}

export function constructFetchQuery(params, perPage, page) {
  const filters = params
    .map((query) => constructFetchQueryParam(query.name, query.options))
    .reduce((acc, curr) => (curr ? acc + `${curr}&` : acc), '')
    .slice(0, -1);

  const fetchQuery = filters
    ? `${filters}&_page=${page}&_limit=${perPage}`
    : `_page=${page}&_limit=${perPage}`;

  return fetchQuery;
}
