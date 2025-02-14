// route.ts

import { createMediaHandlers } from "next-tinacms-azure/dist/handlers";
import { isAuthorized } from "next-tinacms-azure/dist/auth";

const handlers = createMediaHandlers({
  connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING!,
  containerName: process.env.AZURE_STORAGE_CONTAINER_NAME!,
  authorized: async (req) => {
    try {
      if (process.env.NODE_ENV !== "production") {
        return true;
      }

      const user = await isAuthorized(req);

      return !!user?.verified || false;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
});

const { GET, POST, DELETE } = handlers;

export { GET, POST, DELETE };
