import React from "react";
import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import {
  BellIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {};

function Header({}: Props) {
  const connectWithMetaMask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();

  return (
    <div className="max-w-6xl mx-auto p-2">
      <nav className="flex justify-between">
        <div className="flex items-center space-x-2 text-sm">
          {address ? (
            <button className="connectWalletBtn" onClick={disconnect}>
              Hey, {address.slice(0, 5) + "..." + address.slice(-4)}
            </button>
          ) : (
            <button className="connectWalletBtn" onClick={connectWithMetaMask}>
              Hi, Connect your wallet.
            </button>
          )}

          <p className="textHiddenMobile hover:text-blue-500">Daily Dose</p>
          <p className="textHiddenMobile hover:text-blue-500">Help & Contact</p>
        </div>

        <div className="flex items-center space-x-3">
          <p className="textHiddenMobile hover:text-blue-500">Ship to</p>
          <p className="textHiddenMobile hover:text-blue-500">Sell</p>
          <p className="textHiddenMobile hover:text-blue-500">Watchlist</p>

          <Link href="/addItem" className="flex items-center hover:link">
            Add to Inventory <ChevronDownIcon className="h-4" />
          </Link>

          <BellIcon className="h-6 w-6 cursor-pointer" />
          <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </nav>

      <hr className="mt-2" />

      <section className="flex items-center space-x-2">
        <div className="h-16 w-16 sm:w-28 md:w-44 cursor-pointer flex-shrink">
          <Link href="/">
            <Image
              alt="Ebay Logo"
              className="h-full w-full object-contain mt-2"
              src="https://links.papareact.com/bdb"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <button className="hidden lg:flex items-center space-x-2 w-20 text-sm text-gray-500">
          <p>Show by category</p>
          <ChevronDownIcon className="h-4 flex-shrink-0" />
        </button>

        <div className="flex items-center space-x-2 px-2 md:px-5 py-2 border-black border-2 flex-1">
          <MagnifyingGlassIcon className="w-5 text-gray-500" />
          <input
            type="text"
            className="flex-1 outline-none"
            placeholder="Search for anything"
          />
        </div>

        <button className="hidden sm:inline px-5 md:px-10 bg-blue-500 text-white py-2">
          Search
        </button>

        <Link
          href="/create"
          className="px-5 py-2 md:px-10 border-2 border-blue-600 hover:bg-blue-600/50 text-blue-500 hover:text-white"
        >
          List Item
        </Link>
      </section>

      <hr className="mt-3" />

      <section className="flex items-center space-x-6 text-xs md:text-sm py-3 whitespace-nowrap justify-center px-6">
        <p className="link">Home</p>
        <p className="link">Electronics</p>
        <p className="link hidden sm:inline">Computer</p>
        <p className="link hidden sm:inline">Video Games</p>
        <p className="link hidden sm:inline">Fashion & Beauty</p>
        <p className="link hidden md:inline">Books</p>
        <p className="link hidden lg:inline">Music</p>
        <p className="link hidden lg:inline">Stationary</p>
        <p className="link hidden lg:inline">Office</p>
        <p className="link hidden xl:inline">Furnitures</p>
        <p className="link hidden xl:inline">Deals</p>
        <p className="link">Others</p>
      </section>
    </div>
  );
}

export default Header;
