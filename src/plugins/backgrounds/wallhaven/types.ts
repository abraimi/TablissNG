// Default: *
type Categories = {
  general: boolean;
  anime: boolean;
  people: boolean;
};

// Default: sfw
type Purity = {
  sfw: boolean;
  sketchy: boolean;
  nsfw: boolean;
};

// Default: date_added
type Sorting =
  | "date_added"
  | "relevance"
  | "random"
  | "views"
  | "favorites"
  | "toplist";

// Default: desc
type Order = "desc" | "asc";

// Default: 1M
type TopRange = "1d" | "3d" | "1w" | "1M" | "3M" | "6M" | "1y";

type WidthXheight = `${number}x${number}`;

/*
  The seed requires the following requirements: [a-zA-Z0-9]{6}
  And it's used to get random results.
*/
export interface WallhavenFetchOptions {
  categories: Categories;
  purity: Purity;
  sorting: Sorting;
  order: Order;
  topRange: TopRange;
  atleast: WidthXheight;
  resolutions: WidthXheight[];
  ratios: WidthXheight[];
  colors: string[];
  page: number;
  seed: string;
}
