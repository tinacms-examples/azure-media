// route.ts

import { createMediaDeliveryHandlers } from "next-tinacms-azure/dist/delivery-handlers";

const handlers = createMediaDeliveryHandlers({
  connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING!,
  containerName: process.env.AZURE_STORAGE_CONTAINER_NAME!,
  authorized: async () => {
    return true;
  },
});

const { GET } = handlers;

export { GET };
