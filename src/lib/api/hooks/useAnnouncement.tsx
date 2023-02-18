import { useSnackbar } from '@/store/Snackbar';
import { useQuery } from 'react-query';
import { Api } from '..';

const enum QueryKeys {
  All = 'all',
}

export default function useAnnouncement() {
  const showError = useSnackbar((select) => select.showError);

  return useQuery({
    queryFn: () => Api.instance.getList(),
    queryKey: [QueryKeys.All],
    staleTime: 5000,
    onError: (err) => {
      if (err instanceof Error) showError(err.message);
    },
  });
}
