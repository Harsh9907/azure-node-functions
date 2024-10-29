import { AzureFunction, Context } from "@azure/functions";

const blobTrigger: AzureFunction = async function (
  context: Context,
  myBlob: any
): Promise<void> {
  const myVar = process.env.MY_CUSTOM_VARIABLES;
  context.log("Custom Variable:", myVar);

  context.log(
    "Blob trigger function processed blob \n Name:",
    context.bindingData.name,
    "\n Blob Size:",
    myBlob.length,
    "Bytes"
  );
};

export default blobTrigger;
