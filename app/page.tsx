

import { notion } from "@/notion";
import { NotionPage } from "@/components/notion";

const rootPageId = ""; // add your root page id


async function getData(rootPageId:string) {
  return await notion.getPage(rootPageId);
}
export default async function Home() {
  const data = await getData(rootPageId);

  return (
    <NotionPage recordMap={data} rootPageId={rootPageId} />
  );
}
