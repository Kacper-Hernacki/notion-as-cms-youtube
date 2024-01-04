"use client"
import { NotionRenderer } from "react-notion-x";
import Link from "next/link";
import dynamic from 'next/dynamic'
import { ExtendedRecordMap } from "notion-types";

import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)

const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
)

interface NotionPageProps {
  recordMap: ExtendedRecordMap;
  rootPageId: string;
}
export const NotionPage = ({
  recordMap,
  rootPageId
}: NotionPageProps) => {
  if (!recordMap) {
    return null;
  }

  return (
    <div className="notion__container">
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={true}
        rootPageId={rootPageId}
        previewImages
        components={{
          nextLink: Link,
           Code,
           Collection,
           Equation,
           Modal
        }}
      />
    </div>
  );
};

