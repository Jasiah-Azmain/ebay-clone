import Header from "../components/Header";
import {
  useContract,
  useActiveListings,
  MediaRenderer,
} from "@thirdweb-dev/react";
import Head from "next/head";
import { ListingType } from "@thirdweb-dev/sdk";
import { BanknotesIcon, ClockIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,
    "marketplace"
  );
  const { data: listings, isLoading: loadingListings } =
    useActiveListings(contract);

  console.log(listings);

  return (
    <div>
      <Head>
        <title>Ebay for NFTS and all!</title>
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto p-2">
        {loadingListings ? (
          <p className="text-center animate-pulse text-blue-400">
            Loading Lists...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto">
            {listings?.map((listing) => (
              <div
                className="flex flex-col card hover:scale-105 transition-all duration-150 ease-out"
                key={listing.id}
              >
                <div className="flex flex-col pb-2 items-center">
                  <MediaRenderer
                    className="w-44 rounded-md"
                    src={listing.asset.image}
                  />
                </div>

                <div className="pt-2 space-y-4 text-center">
                  <div>
                    <h2 className="text-center font-semibold">
                      {listing.asset.name}
                    </h2>
                    <hr />
                    <p className="truncate text-sm text-gray-400 mt-2 m-4">
                      {listing.asset.description}
                    </p>

                    <p className="text-center">
                      <span className="font-bold">
                        {listing.buyoutCurrencyValuePerToken.displayValue}
                      </span>
                      {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>

                    <div
                      className={`flex items-center justify-end space-x-1 text-xs border w-fit ml-auto p-2 
                    rounded-lg text-white mt-10 ${
                      listing.type === ListingType.Direct
                        ? "bg-blue-500"
                        : "bg-red-500"
                    }`}
                    >
                      <p>
                        {listing.type === ListingType.Direct
                          ? "Buy Now"
                          : "Auction"}
                      </p>
                      {listing.type === ListingType.Direct ? (
                        <BanknotesIcon className="h-4" />
                      ) : (
                        <ClockIcon className="h-4" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
