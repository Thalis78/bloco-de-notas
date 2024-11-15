import { httpClient } from "../services/api/api-client";

type NotesProps = {
  id: number;
  title: string;
  description: string;
};

export const editeNote = async (data: NotesProps) => {
  try {
    const response = await httpClient({
      endpoint: `/${data.id}`,
      config: {
        method: "PUT",
        data,
      },
    });

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
