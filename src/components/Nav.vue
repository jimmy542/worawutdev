<template>
   <nav class="container relative mx-auto p-6">
      <!-- Flex Container For Nav Items -->
      <div class="flex items-center justify-between space-x-20 my-6">
        <!-- Logo -->
        <div class="z-30">
          <img src="images/logo-bookmark.svg" alt="" id="logo" />
        </div>

        <!-- Menu Items -->
        <div
          class="hidden items-center space-x-10 uppercase text-grayishBlue md:flex"
        >
          <a href="#features" class="tracking-widest hover:text-softRed"
            >Features</a
          >
          <a href="#download" class="tracking-widest hover:text-softRed"
            >Download</a
          >
          <a href="#faq" class="tracking-widest hover:text-softRed">FAQ</a>

          <a
            href="#"
            class="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
            >Login</a
          >
        </div>
        <!-- Hamburger Button -->
        <button
          id="menu-btn"
          class="z-30 block md:hidden focus:outline-none hamburger"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div
        id="menu"
        class="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue"
      >
        <div class="w-full py-3 text-center">
          <a href="#features" class="block hover:text-softRed">Features</a>
        </div>
        <div class="w-full py-3 text-center">
          <a href="#download" class="block hover:text-softRed">Download</a>
        </div>
        <div class="w-full py-3 text-center">
          <a href="#faq" class="block hover:text-softRed">FAQ</a>
        </div>
        <div class="w-full py-3 text-center">
          <a href="#" class="block hover:text-softRed">Login</a>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'


const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Activity', href: '/activity', current: false },
  
]
</script>