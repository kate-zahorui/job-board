import s from './ActionsButton.module.css';

const ActionsButton = ({ action }) => {
  return (
    <>
      {action === 'save' && (
        <button className={s[action]}>Save to my list</button>
      )}

      {action === 'share' && <button className={s[action]}>Share</button>}
    </>
  );
};

export default ActionsButton;
