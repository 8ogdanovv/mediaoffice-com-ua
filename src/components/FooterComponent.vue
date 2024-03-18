<template>
  <footer class="footer">
    <span class="copyright">
      © Медіаофіс, 2009 – {{ new Date().getFullYear() }}
    </span>

    <span class="requirements">
      <router-link to="/requirements">
        Вимоги до макетів
      </router-link>
    </span>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-white);
  width: 80dvw;
  display: flex;
  justify-content: space-between;
}

.requirements a {
  color: var(--color-red);
  text-decoration: underline;
}
</style>