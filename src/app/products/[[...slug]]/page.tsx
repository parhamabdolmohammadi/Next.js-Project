import React from "react";

interface Props {
  params: {
    slug?: string[];
  };
  searchParams: { sortOrder: string };
}

const ProductPage = async ({ params, searchParams: { sortOrder } }: Props) => {
  const slug = params.slug ?? [];

  return (
    <>
      <h1>Product Page {sortOrder}</h1>
      {slug.length > 0 ? (
        slug.map((s, index) => <div key={index}>{s}</div>)
      ) : (
        <p>No slug provided</p>
      )}
    </>
  );
};

export default ProductPage;
