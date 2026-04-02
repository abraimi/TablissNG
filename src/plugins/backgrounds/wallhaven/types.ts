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
interface WallhavenFetchOptions {
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

const defaultData: WallhavenFetchOptions = {
  categories: {
    general: true,
    anime: true,
    people: true,
  },
  purity: {
    sfw: true,
    sketchy: false,
    nsfw: false,
  },
  sorting: "date_added",
  order: "desc",
  topRange: "1M",
  atleast: "1920x1080",
  resolutions: ["1920x1080", "2560x1440"],
  ratios: ["16x9"],
  colors: [],
  page: 1,
  seed: "",
};

interface ImagesData {
  id: string;
  url: string;
  short_url: string;
  views: number;
  favorites: number;
  source: string;
  purity: string;
  category: string;
  dimension_x: number;
  dimension_y: number;
  resolution: string;
  ratio: string;
  file_size: number;
  file_type: string;
  created_at: string;
  colors: string[];
  path: string;
  thumbs: {
    large: string;
    original: string;
    small: string;
  };
}

interface ReturnTypes {
  data: ImagesData[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    query: string | null;
    seed: string | null;
  };
}

export {
  type WallhavenFetchOptions,
  type ReturnTypes,
  defaultData as wallhavenDefaultData,
};
