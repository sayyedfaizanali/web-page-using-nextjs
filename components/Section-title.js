export default function SectionTitle({ value }) {
    return (
      <>
        <section className="py-14">
          <h2 className="text-4xl font-bold text-black text-center">
            {value}
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-customeBlue rounded"></div>
        </section>
      </>
    );
  }
  