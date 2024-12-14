const API_KEY = "ctdprt9r01qng9gf6cj0ctdprt9r01qng9gf6cjg";

export async function fetchStockQuote(symbol: string) {
  const response = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
  );
  console.log(response);
  if (!response.ok) {
    throw new Error("Error fetching stock data");
  }

  const data = await response.json();
  console.log(data, "fetch");
  if (!data.c) {
    throw new Error("No results found");
  }

  return {
    currentPrice: data.c,
    openPrice: data.o,
    highPrice: data.h,
    lowPrice: data.l,
    percentChange: data.dp
  };
}
