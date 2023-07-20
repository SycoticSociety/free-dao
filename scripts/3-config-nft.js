import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xBFa731D9a3Af69929Ea42054A84a69640C87dBfc", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "FREE COIN VOTE",
        description: "This NFT will give you access to FREE🪙COIN DAO",
        image: readFileSync("scripts/assets/headband.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
