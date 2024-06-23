export type ReviewType = {
  id: number;
  name: string;
  rating: number; // 1-5
  review: string;
}

export const dummyReviews: ReviewType[] = [
  {
    "id": 1,
    "name": "John Doe",
    "rating": 5,
    "review": "Great product!"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "rating": 4,
    "review": "Good product!"
  },
  {
    "id": 3,
    "name": "John Smith",
    "rating": 3,
    "review": "Average product!"
  }
]