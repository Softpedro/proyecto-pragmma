"use client";
import dymanic from "next/dynamic";
import { fetchCryptoHistory } from "@/app/utils/fetchCryptoHistory";
import { useQuery } from "@tanstack/react-query";

const CryptoLineChart = dymanic(
  () => import("@/app/components/CryptoLineChart/CryptoLineChart"),
  {
    loading: () => <p>Cargando chart...</p>
  }
);

export default function Crypto() {
  const { data: bitcoinHistory, isLoading: isBitcoinLoading } = useQuery({
    queryKey: ["bitcoinHistory", "bitcoin"],
    queryFn: () => fetchCryptoHistory("bitcoin")
  });
  const { data: ethereumHistory, isLoading: isEthereumLoading } = useQuery({
    queryKey: ["ethereumHistory", "ethereum"],
    queryFn: () => fetchCryptoHistory("ethereum")
  });

  if (isBitcoinLoading || isEthereumLoading) {
    return <p>Cargando...</p>;
  }

  const labels = bitcoinHistory?.map((entry) => entry.month) || [];

  const cryptos = [
    {
      name: "Bitcoin",
      values: bitcoinHistory?.map((entry) => entry.average) || []
    },
    {
      name: "Ethereum",
      values: ethereumHistory?.map((entry) => entry.average) || []
    }
  ];
  return (
    <>
      <h1>Crypto dashboard Page</h1>
      <div>
        <CryptoLineChart cryptos={cryptos} labels={labels} />
      </div>
    </>
  );
}
