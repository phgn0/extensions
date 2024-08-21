import { open } from "@raycast/api";
import { webUrl } from "./utils/constants";

export default async function Command() {
    open(`${webUrl}/library`);
}
