import { httpClient } from "../services/api/api-client";

export const getNotes = async () => {
  try {
    const response = await httpClient({
      endpoint: "/",
      config: {
        method: "GET",
      },
    });

    return response.data;
  } catch (e: any) {
    throw new Error(e.error);
  }
};
