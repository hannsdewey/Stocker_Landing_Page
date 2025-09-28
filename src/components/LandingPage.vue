<template>
  <div class="relative w-full flex flex-col min-h-screen">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-black backdrop-blur-sm">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="flex items-center justify-between h-16 border-b border-gray-200 dark:border-gray-800"
        >
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 text-white">
              <img
                src="@/assets/logo.png"
                alt="Stocker Logo"
                class="w-8 h-8 object-contain"
              />
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
                        ₱1,250,000
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
                        ₱1,180,000
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
                        ₱1,120,000
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
            <!-- Twitter -->
            <a
              class="text-gray-400 hover:text-primary"
              href="#"
              aria-label="Twitter"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.71c-.7-.02-1.36-.21-1.94-.53v.05a4.28 4.28 0 0 0 3.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"
                />
              </svg>
            </a>
            <!-- Facebook -->
            <a
              class="text-gray-400 hover:text-primary"
              href="#"
              aria-label="Facebook"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"
                />
              </svg>
            </a>
            <!-- Instagram -->
            <a
              class="text-gray-400 hover:text-primary"
              href="#"
              aria-label="Instagram"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.396 3.635 1.363c-.967.967-1.232 2.14-1.291 3.417C2.013 5.668 2 6.077 2 9.333v5.334c0 3.256.013 3.665.072 4.945.059 1.277.324 2.45 1.291 3.417.967.967 2.14 1.232 3.417 1.291 1.28.059 1.689.072 4.945.072s3.665-.013 4.945-.072c1.277-.059 2.45-.324 3.417-1.291.967-.967 1.232-2.14 1.291-3.417.059-1.28.072-1.689.072-4.945V9.333c0-3.256-.013-3.665-.072-4.945-.059-1.277-.324-2.45-1.291-3.417-.967-.967-2.14-1.232-3.417-1.291C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                />
              </svg>
            </a>
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
              © 2025 Stocker. All rights reserved. Stocker is a simulation tool.
              No real money is traded.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>
