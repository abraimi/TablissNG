import { WallhavenFetchOptions } from "./types";

const postProcess = (options: WallhavenFetchOptions): URLSearchParams => {
  const params = new URLSearchParams();

  // TODO: we need to post process the fetchOptions to be a valid json request body.
  // params.set(
  //   "categories",
  //   (categories.anime ? "1" : "0") +
  //     (categories.general ? "1" : "0") +
  //     (categories.people ? "1" : "0"),
  // );

  void options; // ! remove me
  return params;
};

/**
 * Upon fetching images we need to verify the api key,
 * even though wallhaven work without one, it's
 * limited to what you can request.
 * So we need to validate the params for what can be
 * accessed with an api key and what cannot.
 * And apparently only NSFW that requires an api key.
 *
 * @param WallhavenFetchOptions
 */
export const fetchWallhavenImages = async (options: WallhavenFetchOptions) => {
  const url = "https://wallhaven.cc/api/v1/search";

  if (!WALLHAVEN_API_KEY && options.purity.nsfw) {
    throw new Error("You must set WALLHAVEN_API_KEY to access nsfw");
  }
  const params = postProcess(options);
  void url;
  void params; //! remove me
};
