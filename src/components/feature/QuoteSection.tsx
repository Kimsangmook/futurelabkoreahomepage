import React from 'react';

export default function QuoteSection() {
  return (
    <section className="w-full h-[454px] bg-white flex justify-center items-center">
      <div className="max-w-3xl text-center px-6">
        <p className="text-gray-800 text-[28px] sm:text-[36px] font-semibold leading-tight">
          우리의 목표는 지속가능한 소비를 이끄는 것.
        </p>
        <p className="mt-4 text-gray-600 text-[18px] sm:text-[20px] leading-snug">
          이제껏 보지 못한, 도심 한 가운데 수직농장
        </p>
        <p className="mt-2 text-gray-600 text-[18px] sm:text-[20px] leading-snug">
          퓨처랩코리아가 선도합니다.
        </p>
      </div>
    </section>
  );
}
