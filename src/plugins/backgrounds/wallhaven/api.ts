import { WallhavenFetchOptions } from "./types";

/**
 * Upon fetching images we need to verify the api key,
 * even though wallhaven work without one, it's
 * limited to what you can request.
 * So we need to validate the params for what can be
 * accessed with an api key and what cannot.
 *
 * @param WallhavenFetchOptions
 */

export const fetchWallhavenImages = async ({
  categories,
}: WallhavenFetchOptions) => {
  const url = "https://wallhaven.cc/api/v1/search";
  const params = new URLSearchParams();

  if (!WALLHAVEN_API_KEY) {
    // TODO: Verify the params for what requires an api key
  }
};
