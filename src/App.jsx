import {
  Navbar,
  Footer,
  CustomerReviews,
  SpecialOffer,
  Subscript,
  SupperQuality,
  Services,
  PopularProduct,
} from "./sections/index";
const App = () => (
  <main className="relative">
    <Navbar />
    <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SupperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding-x py-10">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscript />
    </section>
    <section className="padding-x bg-black padding-t pb-8">
      <p className="text-white">
        <Footer />
      </p>
    </section>
  </main>
);

export default App;
