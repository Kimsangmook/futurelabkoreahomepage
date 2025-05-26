export default function Footer() {
  return (
    <footer className="w-full h-[129px] bg-gray-100 flex items-center">
      <div className="container mx-auto px-5 flex flex-col gap-y-3">
        <p className="text-gray-800 font-semibold text-[12px]">주식회사 퓨처랩코리아</p>
        <p className="text-gray-600 text-[10px] leading-tight">
          사업자 등록번호: 238-87-03544
          <br />
          (08502) 서울특별시 금천구 가산디지털1로 212 1306호
          <br />
          admin@futurelabkorea.com
        </p>
      </div>
    </footer>
  );
}
