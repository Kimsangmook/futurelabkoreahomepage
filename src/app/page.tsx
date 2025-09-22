export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* 메인 로고 */}
        <div className="relative flex items-center justify-center">
          <div className="w-[35rem] h-[35rem] md:w-[35rem] md:h-[35rem]">
            <img
              src="/BI.svg"
              alt="Future Lab Korea"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-16 text-center space-y-6 z-10">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bounce"></div>
              <div
                className="w-5 h-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.1s' }}
              ></div>
              <div
                className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.2s' }}
              ></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed whitespace-nowrap">
              현재 웹사이트를 새롭게 단장하고 있습니다.
              <br />곧 새로운 모습으로 찾아뵙겠습니다.
            </p>
          </div>
        </div>

        {/* 연락처 정보 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border space-y-6">
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-lg">admin@futurelabkorea.com</span>
            </div>
            <div className="text-base text-gray-500">
              주식회사 퓨처랩코리아
              <br />
              (08502) 서울특별시 금천구 가산디지털1로 212 1306호
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
