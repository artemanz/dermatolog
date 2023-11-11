"use server"

export interface IData {
  title?: string;
  blocks: {
    priceList: {
      title: string;
      prices: { service: string; price: string }[];
    };
  }[];
}

export async function getPriceList() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_HOST + "/pricelist.json");
    const data = await res.json();

    return [data, null];
  } catch (error) {
    return [null, error];
  }
}
