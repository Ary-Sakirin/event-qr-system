import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Event Showcase</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Tech Innovation Summit 2023
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Join us for a day of cutting-edge technology discussions and
                    networking opportunities.
                  </p>
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span>September 15, 2023</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span>Tech Hub Convention Center, Silicon Valley</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Featured Speakers
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-full mr-3"
                        src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/327425938_608176564648566_5493944082860274782_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGIdfEVnBqD3CpLs4hOztl8j3_C9rAopCmPf8L2sCikKXDLoR2zmIQgxYU0nV0VKudN_NOwyFoaTRjM-6Umqxvs&_nc_ohc=RWtgq11XXhgQ7kNvgFmshRh&_nc_zt=23&_nc_ht=scontent.fpnh10-1.fna&_nc_gid=AE-AnxXHbhSNklqxDqdK1tt&oh=00_AYAOuNXTUQQXvdxs9Mv-wEMA_EKIC2_Cn2fcAzrZHA-Crg&oe=671BB27A"
                        alt="Jane Doe"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Jane Doe
                        </p>
                        <p className="text-sm text-gray-500">
                          AI Research Lead, TechCorp
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-full mr-3"
                        src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/327425938_608176564648566_5493944082860274782_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGIdfEVnBqD3CpLs4hOztl8j3_C9rAopCmPf8L2sCikKXDLoR2zmIQgxYU0nV0VKudN_NOwyFoaTRjM-6Umqxvs&_nc_ohc=RWtgq11XXhgQ7kNvgFmshRh&_nc_zt=23&_nc_ht=scontent.fpnh10-1.fna&_nc_gid=AE-AnxXHbhSNklqxDqdK1tt&oh=00_AYAOuNXTUQQXvdxs9Mv-wEMA_EKIC2_Cn2fcAzrZHA-Crg&oe=671BB27A"
                        alt="John Smith"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          John Smith
                        </p>
                        <p className="text-sm text-gray-500">
                          CTO, Future Innovations
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/register"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
