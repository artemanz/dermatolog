"use server";

export interface IReview {
  id: number;
  name: string;
  rating: number;
  source?: { href: string; text: string };
  text: string;
}

export function getReviews(): Promise<[IReview[], null]>;
export function getReviews(): Promise<[null, unknown]>;

export async function getReviews() {
  try {
    const res = await fetch("http://localhost:3000/reviews.json");
    const data = await res.json();

    return [data, null];
  } catch (error) {
    return [null, error];
  }
}
