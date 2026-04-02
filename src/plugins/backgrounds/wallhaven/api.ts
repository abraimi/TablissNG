import { WallhavenFetchOptions } from "./types";

/**
 * Upon fetching images we need to verify the api key,
 * even though wallhaven work without one, it's
 * limited to what you can request.
 * So we need to validate the params for what can be
 * accessed with an api key and what cannot.
 * And apparently only NSFW that requires an api key.
 * @param WallhavenFetchOptions
 */

export const fetchWallhavenImages = async ({
  categories,
  atleast,
  colors,
  order,
  page,
  purity,
  ratios,
  resolutions,
  seed,
  sorting,
  topRange,
}: WallhavenFetchOptions) => {
  const url = "https://wallhaven.cc/api/v1/search";
  const params = new URLSearchParams();

  if (!WALLHAVEN_API_KEY && purity.nsfw) {
    throw new Error("You must set WALLHAVEN_API_KEY to access nsfw");
  }
  // TODO: we have to switch from function params to api request url params 1 by 1.
  params.set(
    "categories",
    (categories.anime ? "1" : "0") +
      (categories.general ? "1" : "0") +
      (categories.people ? "1" : "0"),
  );
};
