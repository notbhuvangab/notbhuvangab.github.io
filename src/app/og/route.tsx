import { ImageResponse } from "next/og";
import { metaData } from "../lib/config";

// Required for Next.js static export
export const dynamic = "force-static";

export function GET() {
  // For static export, use the default title from config
  const title = metaData.title;

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold text-left">{title}</h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
