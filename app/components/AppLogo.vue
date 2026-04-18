<template>
  <div class="flex items-center gap-3 group whitespace-nowrap">
    <!-- Bold Squircle N Logo -->
    <div class="relative flex items-center justify-center shrink-0">
      <div class="w-9 h-9 bg-neutral-950 dark:bg-white rounded-[10px] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl overflow-hidden ring-1 ring-white/10 dark:ring-black/10">
        <!-- Modern, Thick Geometric N -->
        <svg viewBox="0 0 24 24" class="w-5 h-5 fill-white dark:fill-black" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H8.5L15.5 14.5V3H21V21H15.5L8.5 9.5V21H3V3Z" />
        </svg>
        
        <!-- Subtle noise/texture overlay for character -->
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <!-- Reflective sheen -->
        <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
      </div>
      <!-- Ambient Glow -->
      <div class="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    <!-- Brand Name -->
    <div class="flex items-center tracking-tighter">
      <span class="text-neutral-900 dark:text-white font-black text-2xl">NLFT</span>
      <span class="text-neutral-900 dark:text-white font-semibold text-2xl lowercase">s</span>
    </div>
  </div>
</template>
