export default function Section({ id, title }) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center border-t border-gray-700"
    >
      <h2 className="text-4xl tracking-widest text-gray-300">
        {title}
      </h2>
    </section>
  );
}
