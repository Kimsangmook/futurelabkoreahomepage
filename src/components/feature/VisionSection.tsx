import React from 'react';

export default function VisionSection() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-5 flex flex-col space-y-8">
        {/* Challenge Section */}
        <div className="flex flex-row items-center space-x-4 md:space-x-12 h-[231px]">
          {/* Image (left) */}
          <div className="w-1/2 h-full relative">
            <img
              src="/challange.png"
              alt="Challenge - 도심형 수직농장"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-r from-transparent to-white" />
          </div>
          {/* Text (right) */}
          <div className="w-1/2 h-full flex items-center justify-end px-20">
            <div className="text-right">
              <h2 className="text-[24px] font-bold text-gray-800 leading-none">Challenge.</h2>
              <p className="mt-2 text-gray-600 text-[18px] leading-[24px] whitespace-pre-line">
                아무도 시도하지 않았던
                <br />
                도심형 수직농장.
              </p>
            </div>
          </div>
        </div>

        {/* Consideration Section */}
        <div className="flex flex-row items-center space-x-4 md:space-x-12 h-[231px]">
          {/* Text (left) */}
          <div className="w-1/2 h-full flex items-center justify-start px-20">
            <div className="text-left">
              <h2 className="text-[24px] font-bold text-gray-800 leading-none">Consideration.</h2>
              <p className="mt-2 text-gray-600 text-[18px] leading-[24px] whitespace-pre-line">
                미래를 위한 작은 한걸음,
                <br />
                퓨처랩코리아가 생각합니다.
              </p>
            </div>
          </div>
          {/* Image (right) */}
          <div className="w-1/2 h-full relative">
            <img
              src="/direction.png"
              alt="Consideration - 방향성"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-l from-transparent to-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
