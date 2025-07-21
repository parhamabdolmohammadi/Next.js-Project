import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const page = ({ params: { id } }: Props) => {
  if (id > 10) notFound(); //redirects it to lowest not-found.tsx the

  return <div>UserDetailPage {id}</div>;
};

export default page;
