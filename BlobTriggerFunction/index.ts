import { app, InvocationContext } from "@azure/functions";

// Define the Blob Trigger Function
export async function blobTriggerFunction(
  myBlob: Buffer, // Use Buffer to represent the blob data
  context: InvocationContext // The context for logging and binding data
): Promise<void> {
  // Log details about the blob
  context.log(
    `Blob trigger function processed blob:\n Name: ${context.triggerMetadata.blobTrigger}\n Blob Size: ${myBlob.length} Bytes`
  );

  // Optionally log environment variables or other useful info
  const myVar = process.env.MY_CUSTOM_VARIABLES;
  context.log("Custom Variable:", myVar);
  // context.log("Custom Variable:", myVar);

  // Additional processing of the blob can go here
}

// Register the Blob Trigger
app.storageBlob("blobTriggerFunction", {
  path: "mycontainer/{name}", // Path to the blob container (replace with your actual container)
  connection: "AzureWebJobsStorage", // Connection string for the storage account
  handler: blobTriggerFunction, // Function handler
});
