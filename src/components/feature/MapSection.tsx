import React from 'react';

export default function MapSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-5 flex flex-col md:flex-row gap-8">
        {/* Text */}
        <div className="md:w-1/3 h-full">
          <h2 className="text-[32px] font-bold text-gray-800">퓨처랩코리아</h2>
          <p className="mt-2 text-[px] text-gray-600 leading-[28px]">여기서 출발합니다.</p>
        </div>

        {/* Google Map Embed */}
        <div className="md:w-2/3 w-full h-[261px] rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EA%B8%88%EC%B2%9C%EA%B5%AC+%EA%B0%80%EC%82%B0%EB%94%94%EC%A7%80%ED%84%B81%EB%A1%9C+212+1306&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
