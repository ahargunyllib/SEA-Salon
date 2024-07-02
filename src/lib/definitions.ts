export type Review = {
  id: number;
  comment: string;
  rating: number;
  user: {
    fullName: string;
  };
};