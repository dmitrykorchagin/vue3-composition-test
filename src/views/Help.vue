<template>
  <app-page title="Помощь" back>
    <questions-item v-for="q in questions" :key="q.title" :question="q"></questions-item>
  </app-page>
</template>

<script>
import QuestionsItem from '../components/questions/QuestionsItem.vue';
import AppPage from '../components/ui/AppPage.vue';
export default {
  components: { AppPage, QuestionsItem },
  setup() {
    const questions = [
      {
        title: 'Что есть в данной системе?',
        text: 'Тут есть все, для того, чтобы смотреть, какие заявки человек добавлял',
      },
      { title: 'Как тут работает авторизация?', text: 'Все реализовано через Firebase' },
    ];

    return { questions };
  },
};
</script>

<style scoped></style>
