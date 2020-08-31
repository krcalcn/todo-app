import { Dialog, Loading } from 'quasar';

export function showErrorMessage(errorMessagge) {
  Loading.hide();
  Dialog.create({
    title: 'Error',
    message: errorMessagge,
  });
}
