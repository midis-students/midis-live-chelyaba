import { Snackbar } from '@vkontakte/vkui';
import { create } from 'zustand';
import { Icon16ErrorCircleFill } from '@vkontakte/icons';

type SnackBarState = {
  current: JSX.Element | null;
  set: (snack: JSX.Element | null) => void;
  showError: (error: string) => void;
};

export const useSnackbar = create<SnackBarState>((set, get) => ({
  current: null,
  set: (snack) => set({ current: snack }),
  showError: (error) => {
    const set = get().set;

    set(
      <Snackbar onClose={() => set(null)} subtitle={error} before={<Icon16ErrorCircleFill />}>
        Произошла ошибка, не паникуйте!
      </Snackbar>,
    );
  },
}));
