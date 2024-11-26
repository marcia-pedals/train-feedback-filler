import ClipperReader from "./clipperReader";

export default async function Page({
  params,
}: {
  params: Promise<{ templateId: string }>;
}) {
  const templateId = (await params).templateId;
  switch (templateId) {
    case "clipper-reader":
      return <ClipperReader />;
  }
  return <>{templateId}</>;
}
