import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

export default function useLoginForm() {
  const store = useStore();
  const router = useRouter();
  const { handleSubmit, isSubmitting, submitCount } = useForm();
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Поле Email обязательное')
      .email('Необходимо ввести корректный Email')
  );
  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    'password',
    yup
      .string()
      .trim()
      .required('Поле Password обязательное')
      .min(6, 'Пароль не может быть меньше 6 символов')
  );

  const onSubmit = handleSubmit(async values => {
    try {
      await store.dispatch('auth/login', values);
      router.push('/');
    } catch (e) {}
  });

  const isTooManyAttemps = computed(() => submitCount.value >= 3);

  watch(isTooManyAttemps, val => {
    if (val) {
      setTimeout(() => {
        submitCount.value = 0;
      }, 2000);
    }
  });

  return {
    email,
    eError,
    eBlur,
    password,
    pError,
    pBlur,
    onSubmit,
    isSubmitting,
    isTooManyAttemps,
  };
}
