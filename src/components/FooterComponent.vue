<template>
  <footer class="footer">
    <section class="content">
      <span class="copyright">
        © Медіаофіс, 2009 – {{ new Date().getFullYear() }}
      </span>

      <span class="requirements">
        <router-link to="/requirements">
          Вимоги до макетів
        </router-link>
      </span>
    </section>

    <section class="blank"></section>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: 5fr 2fr;
}

.copyright {
  color: var(--color-grey);
}

.content {
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2.5rem 0 0;
}

.content,
.blank {
  position: relative;
}

.content::before,
.blank::before {
  position: absolute;
  content: '';
  top: 0;
  height: 1px;
}

.content::before {
  background-color: var(--color-red);
  width: calc(100% - 1.25rem);
}

.blank::before {
  width: 100%;
  background-color: var(--color-gray);
}

.requirements a {
  color: var(--color-red);
  text-decoration: underline;
}
</style>