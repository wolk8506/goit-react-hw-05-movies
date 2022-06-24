import { Oval } from 'react-loader-spinner';
import s from 'components/Pages/Pages.module.css';

export const Loader = () => {
  return (
    <div className={s.loader}>
      <Oval />
    </div>
  );
};
