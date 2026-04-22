<template>
  <UMain class="py-24">
    <UContainer>
      <UPageHeader
        title="Community"
        description="Bergabung dengan komunitas developer kami dan bangun relasi global."
        class="text-center"
      />
      <UPageBody>
        <UCard class="max-w-3xl mx-auto mt-12 backdrop-blur-xl bg-neutral-900/50 border-neutral-800">
          <div class="text-center py-12">
            <UIcon
              name="i-lucide-users"
              class="w-16 h-16 mx-auto mb-6 text-primary"
            />
            <h2 class="text-2xl font-bold mb-4">
              Under Construction
            </h2>
            <p class="text-neutral-400">
              Halaman komunitas sedang dalam tahap pengembangan.
            </p>
            <div class="mt-8">
              <UButton
                label="Join Discord"
                icon="i-simple-icons-discord"
                color="primary"
                to="https://go.nuxt.com/discord"
                target="_blank"
              />
            </div>
          </div>
        </UCard>
      </UPageBody>
    </UContainer>
  </UMain>
</template>
