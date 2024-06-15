import Navbar from "./purv-nagar-hero-section/Navbar";
const App = () => {
  return (
    <main className="bg-primary w-full overflow-hidden">
      <div className={'flex justify-center items-center sm:px-16 px-6'}>
        <div className={'xl:max-w-[1280px] w-full'}>
          <Navbar />
        </div>
      </div>
    </main>
  );
};

export default App;
