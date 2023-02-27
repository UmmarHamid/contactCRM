type NotificationModel = {
  text: string;
  variant:
    | 'primary'
    | 'success'
    | 'danger'
    | 'primary-small'
    | 'success-small'
    | 'danger-small';
  extraClasses?: string;
};
export default NotificationModel;
