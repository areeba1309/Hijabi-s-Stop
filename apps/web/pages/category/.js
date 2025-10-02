export default function CategoryPage({ slug }) {
  return (
    <div className="container">
      <h1>{slug} Catalog</h1>
      {/* Placeholder for category items */}
    </div>
  );
}

// optional static props if you have data
export async function getStaticProps(context) {
  return { props: { slug: context.params.slug } };
}
export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
