export default function LandingSection() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/background.png')] bg-center bg-cover" />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent" />
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="text-gray-800 text-[32px] sm:text-[48px] font-bold leading-[48px] sm:leading-[64px] text-center">
          우리는 가장 가까운 텃밭,
          <br />
          도심형 스마트팜을 만들어갑니다.
        </h1>
      </div>
    </section>
  );
}
