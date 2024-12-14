export default function Articles({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Page Page</h1>
      <p>
        This is a dynamic page and it will be generated for each article with
        the id: {params.id}
      </p>
    </div>
  );
}
