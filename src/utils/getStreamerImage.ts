import twitchApiService from "@/services/TwitchApiService";

export const getStreamerImage = async (userLogin: string) => {
  try {
    const token = localStorage.getItem("token");

    const {
      data: { data },
    }: { data: { data: { profile_image_url: string }[] } } =
      await twitchApiService.get(`/helix/users?login=${userLogin}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    return data[0].profile_image_url;
  } catch (err: any) {
    console.log(err, "7WAVES_LOG_err");
    throw new Error(err);
  }
};
