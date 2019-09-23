import cogoToast from 'cogo-toast';

export const toast = (type, msg) => {
  const options = {
    position: 'bottom-left',
    onClick: hide => {
      hide();
    }
  };

  switch (type) {
    case 'info':
      cogoToast.info(msg, options);
      break;
    case 'success':
      cogoToast.success(msg, options);
      break;
    case 'warning':
      cogoToast.warn(msg, options);
      break;
    case 'error':
      cogoToast.error(msg, options);
      break;
    default:
      cogoToast.error(msg, options);
  }
};
