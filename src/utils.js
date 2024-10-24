function constructFetchQueryParam(name, options) {
  const queryOptions = options.length
    ? options.reduce((acc, curr) => acc + `${curr}|`, '').slice(0, -1)
    : null;
  const fetchParam = queryOptions ? `${name}_like=(?:${queryOptions})` : '';

  return fetchParam;
}

export function constructFetchQuery(params, sort) {
  const sortByOptions = {
    asc: 'price',
    desc: 'price&_order=desc',
    atoz: 'name',
    ztoa: 'name&_order=desc',
    rat: 'rating&_order=desc',
  };

  const filters = params
    .map((query) => constructFetchQueryParam(query.name, query.options))
    .reduce((acc, curr) => (curr ? acc + `${curr}&` : acc), '')
    .slice(0, -1);

  const fetchQuery = filters
    ? `${filters}&_page=${sort.page}&_limit=${sort.perPage}&_sort=${sortByOptions[sort.by]}`
    : `_page=${sort.page}&_limit=${sort.perPage}&_sort=${sortByOptions[sort.by]}`;

  return fetchQuery;
}
