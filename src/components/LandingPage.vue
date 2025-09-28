<template>
  <div class="relative w-full flex flex-col min-h-screen">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-black backdrop-blur-sm">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="flex items-center justify-between h-16 border-b border-gray-200 dark:border-gray-800"
        >
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">
              Stocker
            </h2>
          </div>
          <nav class="hidden md:flex items-center gap-8">
            <a
              class="text-sm font-medium text-white hover:text-primary transition-colors"
              href="#"
              >Learn</a
            >
            <a
              class="text-sm font-medium text-white hover:text-primary transition-colors"
              href="#"
              >Community</a
            >
            <a
              class="text-sm font-medium text-white hover:text-primary transition-colors"
              href="#"
              >Pricing</a
            >
          </nav>
          <div class="flex items-center gap-2">
            <button
              class="px-4 py-2 text-sm font-bold text-gray-800 dark:text-white bg-gray-200/80 dark:bg-white/10 rounded-lg hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
            >
              Log In
            </button>
            <button
              class="px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Hero Section -->
      <section class="relative py-24 md:py-32">
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.3) 0%,
                rgba(0, 0, 0, 0.6) 100%
              ),
              url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6-HCvienKsvqgAjmg67CiPdCCvQJb5N48UfrlbRwSbGnbh0sD9M64z7yJ0s7B5GStpXyDxNqboy5aX4lx_kEJ8jXTVt8AAGr8pXnY5X_akFU2UZsHDCgKitpc-w5oJ-ArBz1Yi3GWW9bEDY7t7D38BzuhI9aJ4HZEiU2HeYCCFtl4Qzd9UPcrWaLxF5WE5uFQiEleatXIzP2lXAMBroFhWN0qlXWZAZIi1Fgho8Dkpej3SEk1e6MwfEtQipULwlaUW2eCX3ZLYh8');
          "
        ></div>
        <div
          class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h1 class="text-4xl md:text-6xl font-black tracking-tighter">
            Master the Market. Risk-Free.
          </h1>
          <p class="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            Stocker is a gamified stock investment simulator — trade real &amp;
            fake stocks, test strategies, and climb the leaderboard without
            losing real money.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <button
              class="px-8 py-3 text-base font-bold text-white bg-black rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Trading Free
            </button>
            <button
              class="px-8 py-3 text-base font-bold bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
            >
              See How It Works
            </button>
          </div>
        </div>
      </section>
      <!-- How It Works -->
      <section class="py-16 md:py-24 bg-black">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2
              class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              How It Works
            </h2>
            <p
              class="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400"
            >
              A simple, three-step process to get you started on your trading
              journey.
            </p>
          </div>
          <div class="mt-12 grid gap-8 md:grid-cols-3">
            <div
              class="flex flex-col items-center text-center p-6 bg-grey-900 rounded-xl shadow-sm"
            >
              <div
                class="flex items-center justify-center h-12 w-12 rounded-full bg-white text-primary"
              >
                <span class="material-symbols-outlined">analytics</span>
              </div>
              <h3
                class="mt-5 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Learn the Market
              </h3>
              <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                Understand market dynamics with real-time data and educational
                resources.
              </p>
            </div>
            <div
              class="flex flex-col items-center text-center p-6 bg-grey-900 rounded-xl shadow-sm"
            >
              <div
                class="flex items-center justify-center h-12 w-12 rounded-full bg-white text-primary"
              >
                <span class="material-symbols-outlined">candlestick_chart</span>
              </div>
              <h3
                class="mt-5 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Trade Smarter
              </h3>
              <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                Refine your trading strategies using our advanced simulation
                tools.
              </p>
            </div>
            <div
              class="flex flex-col items-center text-center p-6 bg-grey-900 rounded-xl shadow-sm"
            >
              <div
                class="flex items-center justify-center h-12 w-12 rounded-full bg-white text-primary"
              >
                <span class="material-symbols-outlined">emoji_events</span>
              </div>
              <h3
                class="mt-5 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Compete &amp; Win
              </h3>
              <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                Join our community, climb the leaderboard, and showcase your
                skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Features -->
      <section class="py-16 md:py-24 bg-black dark:bg-background-dark/50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2
              class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Features
            </h2>
            <p
              class="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400"
            >
              Everything you need to become a smarter investor.
            </p>
          </div>
          <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <!-- Feature Cards (repeat for each feature) -->
            <div class="flex flex-col gap-4">
              <div
                class="w-full aspect-video rounded-lg bg-cover bg-center"
                style="
                  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCq6M4blgl0suddyTBjumoYYE04tZ0jInez_3i4gS93IIZg1MsbpFnNrDIYP50TK6LnMStw4p0KddP3jStCmFgT63HS4VJaXwaNCzoKtnFm_Pyw1vj0zG17UMI36XdPdyJB7pIZfE7aSncJnouiJtB0aCwG9MhSPDz4Qpqk_-dfUzflmoE1y8sRj553JlOL-Z3uF_y_rAL3t5Acj05KyLFuxUxnM1_apDCYq-Tyf5rRbpHTJuSsjWnX1An4QUlwS9vwkMUX1aFZY_4');
                "
              ></div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  Portfolio Dashboard
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Track your investments and performance with a comprehensive
                  dashboard.
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div
                class="w-full aspect-video rounded-lg bg-cover bg-center"
                style="
                  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoRaBAEhdTh6rJxs9EA01uCK056AfnmzTzT-2Naq46teUfrOc-linkC-ee-bgSIEJy7E3Fr2EMiBIuI57EHeDBreoV7x9zdTqL0NIiAvjNVVMiAud7V2BcB80kTa5lq16h7P_WROYYDD7Z0Xp_PwESCXoov1665-Y1O0FrJz3argeeB3T6gXjPNmp1LK2a-RMvsGDl7uLAlx8l-murNN9tDvEu6GKHgSaQMSi1BO_hwRatm6ZnkNrAymcZN2LN6C9hhzQ20O9L4fI');
                "
              ></div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  Monte Carlo Simulator
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Simulate potential outcomes and optimize your trading
                  strategies.
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div
                class="w-full aspect-video rounded-lg bg-cover bg-center"
                style="
                  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVb3WPwDAe_APvixLtlMPPNBUokYnIYBe3nIr_Hr_hxa1RBBsOo-1DUjIXInGduxSXyOIEmmFlaWMmkA_trruzNnjeOMG4bi4hzAafmiAhHF9cQ17HltRmSD0nWsAOeUDn63c3R2dg9PLcOM0ER8bnlSyXp8fSBU0VfO5G6-dXJ95DHPbA1B2Azb__C2u3w9hGdt-QS2PMD1cWyJhFLQTL9x4plnIRYwGPvdMmfdo5iBm4JuyUgpMY9A3eXRZ8AdhqGFBIYzU2mgY');
                "
              ></div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  Market News Feed
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Stay informed with the latest market news and analysis.
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div
                class="w-full aspect-video rounded-lg bg-cover bg-center"
                style="
                  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2WfhUOMO8G2CXjWrrEO1u56ytvD1FV3jbwSB1Llq855ASllVYbPscZnYeIaLNYA5sRkKe4_-P3T65vBzW1BJNkDOS0FS4xSLBR9tczrgW41JuFrkLJPxjVEfYbTlG9OTPi9VqiihI3g4dsDh_yH85etkeuUF0SAMJAIzYf-rzYEvFYQS05ihgKZDD8ziRtGpw4tll1r0408p-RJzYarBOhick0u-g9xxI6koq5lLLYYgVlYA5Dw7ZUdPEyKUbTHAYEy6RXdKukBg');
                "
              ></div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  Leaderboard
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Compete with other traders and see how you rank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Social Proof & Gamification -->
      <section class="py-16 md:py-24 bg-black">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2
              class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Social Proof &amp; Gamification
            </h2>
            <p
              class="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400"
            >
              See who's on top and join a thriving community of traders.
            </p>
          </div>
          <div class="mt-12 max-w-4xl mx-auto grid gap-8 lg:grid-cols-3">
            <div class="lg:col-span-2">
              <div
                class="overflow-hidden rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <table class="w-full text-left">
                  <thead class="dark:bg-white/5">
                    <tr>
                      <th
                        class="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300"
                      >
                        Rank
                      </th>
                      <th
                        class="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300"
                      >
                        Trader
                      </th>
                      <th
                        class="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300"
                      >
                        Portfolio Value
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="dark:bg-white/5 divide-y divide-gray-200 dark:divide-gray-800"
                  >
                    <tr>
                      <td class="p-4 font-medium text-gray-900 dark:text-white">
                        <span
                          class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-yellow-900"
                          >1</span
                        >
                      </td>
                      <td class="p-4 text-gray-800 dark:text-gray-200">
                        Alex Turner
                      </td>
                      <td
                        class="p-4 text-gray-500 dark:text-gray-400 font-mono"
                      >
                        $1,250,000
                      </td>
                    </tr>
                    <tr>
                      <td class="p-4 font-medium text-gray-900 dark:text-white">
                        <span
                          class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-300 text-gray-800"
                          >2</span
                        >
                      </td>
                      <td class="p-4 text-gray-800 dark:text-gray-200">
                        Olivia Chen
                      </td>
                      <td
                        class="p-4 text-gray-500 dark:text-gray-400 font-mono"
                      >
                        $1,180,000
                      </td>
                    </tr>
                    <tr>
                      <td class="p-4 font-medium text-gray-900 dark:text-white">
                        <span
                          class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-600 text-yellow-100"
                          >3</span
                        >
                      </td>
                      <td class="p-4 text-gray-800 dark:text-gray-200">
                        Ethan Walker
                      </td>
                      <td
                        class="p-4 text-gray-500 dark:text-gray-400 font-mono"
                      >
                        $1,120,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="flex flex-col gap-8">
              <div
                class="p-6 rounded-xl shadow-sm dark:bg-white/5 border border-gray-200 dark:border-gray-700"
              >
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  Trades Last Week
                </h3>
                <p class="text-3xl font-bold text-white mt-2">10,000+</p>
              </div>
              <div
                class="p-6 rounded-xl shadow-sm dark:bg-white/5 border border-gray-200 dark:border-gray-700"
              >
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  Active Traders
                </h3>
                <p class="text-3xl font-bold text-white mt-2">1,500+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- CTA Section -->
      <section class="bg-black">
        <div
          class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center"
        >
          <h2 class="text-3xl md:text-4xl font-black tracking-tight text-white">
            Your stock market journey starts here.
          </h2>
          <div class="mt-8 flex justify-center">
            <button
              class="px-8 py-3 text-base font-bold text-primary bg-white rounded-lg hover:bg-gray-200 transition-colors"
            >
              Get Started Free →
            </button>
          </div>
        </div>
      </section>
    </main>
    <!-- Footer -->
    <footer class="bg-black border-t border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div class="flex gap-6 md:order-2">
            <a class="text-gray-400 hover:text-primary" href="#"
              ><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.46,6.54a.5.5,0,0,0-.4-.2l-3.1-.45a3,3,0,0,0-2.3,1,2.94,2.94,0,0,0-.8,1.9v.3a6.83,6.83,0,0,1-4.8-2.4c-.2-.2-.5-.4-.7-.6a.5.5,0,0,0-.8.4c-.5,3,1.3,5,2.8,6.1a7.52,7.52,0,0,0,2.6,1.5,1,1,0,0,0,.6.1c-.9,1.1-2.4,1.7-2.5,1.7a.5.5,0,0,0-.2.7.5.5,0,0,0,.4.3c.1,0,.8.3,1.9.8,2.1.8,4.1,1,6.5,1,4.4,0,8.1-3.4,8.5-7.8l1.9-1.8a.5.5,0,0,0,.1-.4Zm-3.1,1.5a.5.5,0,0,0-.2.3c-.4,2.9-3,5-6.8,5-1.7,0-2.8-.2-3.6-.5.7-.4,1.8-1.1,2.4-2a.5.5,0,0,0-.2-.8c0-.1-2.7-1.6-2.7-6,1, .6,3,1.8,4.9,2.3a.5.5,0,0,0,.5-.2V9.6a1.94,1.94,0,0,1,.5-1.4A2.06,2.06,0,0,1,16,7.7a2.07,2.07,0,0,1,1.5.7.5.5,0,0,0,.6.2l2.3.2Z"
                ></path></svg
            ></a>
            <a class="text-gray-400 hover:text-primary" href="#"
              ><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3,9.5H13.5V11a1,1,0,0,1,1-1h1V8.5h-2a2.5,2.5,0,0,0-2.5,2.5V13H8.5v1.5H10V18h1.5V14.5H13L13.5,13Z"
                ></path></svg
            ></a>
            <a class="text-gray-400 hover:text-primary" href="#"
              ><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,10.5a3.5,3.5,0,1,1-3.5-3.5A3.5,3.5,0,0,1,15.5,12.5Zm3-4a1,1,0,1,1-1-1A1,1,0,0,1,18.5,8.5ZM8,18a4,4,0,0,1,4-4,4,4,0,0,1,4,4H8Z"
                ></path></svg
            ></a>
          </div>
          <div class="text-center md:text-left md:order-1">
            <nav
              class="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-4"
            >
              <a
                class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary"
                href="#"
                >About</a
              >
              <a
                class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary"
                href="#"
                >FAQ</a
              >
              <a
                class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary"
                href="#"
                >Privacy</a
              >
              <a
                class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary"
                href="#"
                >Contact</a
              >
            </nav>
            <p class="text-sm text-gray-400 dark:text-gray-500">
              © 2024 Stocker. All rights reserved. Stocker is a simulation tool.
              No real money is traded.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>
