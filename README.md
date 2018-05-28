# Algolia React Challenge

A React application.

## Get started
```ssh
npm install
npm start
```

## Done
- [x] Integration with responsive
- [x] As-you-type search experience using Algolia JS Helper
- [x] Filter by type of cuisine, rating or payment option
- [x] Geo filter restaurants with user's location

## Change in UX
- Show More button in full-width for better accessibility

## Suggestions for improvement
- [ ] I think it would be better to use the `connect()` function from Redux or React Refetch for updating the states but I have not yet figured out how to use it
- [ ] When clicking on "Show More", only ask Algolia for the new restaurants that we need instead of asking the ones we already have + new ones
- [ ] Add as-you-type autocomplete suggestions
- [ ] Highlight results to demonstrate why a result matched the query