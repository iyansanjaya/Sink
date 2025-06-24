<script setup>

const { title, description, github } = useAppConfig()
</script>

<template>
  <main
    class="text-center"
  >
    <div class="flex flex-col items-center justify-center">
      <h1
        class="text-5xl font-bold lg:text-6xl xl:text-7xl lg:tracking-tight xl:tracking-tighter"
      >
        {{ title }} Shortlink
      </h1>
      <p class="max-w-xl mt-4 text-lg text-slate-600">
        {{ description }}
      </p>
      <a href="https://iyansanjaya.com">
        <p class="max-w-xl mt-4 cursor-pointer text-base dark:text-black bg-blue-200 w-max px-3 py-1 rounded-sm uppercase font-semibold hover:bg-blue-200/80 transition-colors">
          Iyan Sanjaya
        </p>
      </a>
    </div>
  </main>
</template>
