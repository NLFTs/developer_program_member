<template>
  <div class="flex items-center gap-2 group font-medium text-lg whitespace-nowrap">
    <div class="relative w-6 h-6 flex items-center justify-center">
      <!-- Stylized 'A' icon similar to the image -->
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <path d="M12 4L4 18H20L12 4Z" fill="var(--ui-primary)" class="opacity-80" />
        <path d="M12 8L8 16H16L12 8Z" fill="white" />
        <path d="M10 14L12 11L14 14H10Z" fill="var(--ui-primary)" />
      </svg>
      <!-- Gradient glow effect -->
      <div class="absolute inset-0 bg-primary-500/20 blur-md rounded-full group-hover:bg-primary-500/30 transition-colors" />
    </div>
    <div class="flex items-center translate-y-[-1px]">
      <span class="text-neutral-900 dark:text-white font-semibold">Developer</span>
      <span class="text-neutral-500 dark:text-neutral-400 ml-1.5">Program Member</span>
    </div>
  </div>
</template>
