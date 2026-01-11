import EstimateCard from "./components/EstimateCard";

export default function Home() {
  return (
    <main
      className="min-h-screen flex items-start justify-center p-8 bg-accent-100"
    >
      <div className="w-full max-w-4xl">
        <div className="mb-6">
          <button
            type="button"
            className="px-4 py-2 rounded text-white bg-secondary font-medium"
          >
            Book transport
          </button>
        </div>

        <section>
          <EstimateCard />
        </section>
      </div>
    </main>
  );
}
