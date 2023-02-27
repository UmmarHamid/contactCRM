import React from 'react';
import classNames from 'classnames';
import NotificationModel from '../../@types/notification.types';
import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from 'react-icons/ci';
import Text from '../Text/Text';

function Notification({ text, variant, extraClasses }: NotificationModel) {
  let classes = classNames(
    'flex border border-solid rounded-lg items-center',
    {
      'border-violetUltra bg-milkyMist p-4 ': variant == 'primary',
      'border-plantaGreen-primary bg-plantaGreen-10 p-4': variant == 'success',
      'border-error-secondary bg-error-primary p-4': variant == 'danger',
      'border-violetUltra bg-milkyMist p-2': variant == 'primary-small',
      'border-plantaGreen-primary bg-plantaGreen-10 p-2':
        variant == 'success-small',
      'border-error-secondary bg-error-primary p-2': variant == 'danger-small',
    },
    extraClasses,
  );
  let iconClasses = classNames('w-6 h-6 mr-4', {
    'text-violetUltra': variant == 'primary' || variant == 'primary-small',
    'text-plantaGreen-primary':
      variant == 'success' || variant == 'success-small',
    'text-error-secondary': variant == 'danger' || variant == 'danger-small',
  });
  return (
    <div className={classes}>
      {(variant == 'primary' || variant == 'primary-small') && (
        <CiFaceMeh className={iconClasses} />
      )}
      {(variant == 'danger' || variant == 'danger-small') && (
        <CiFaceFrown className={iconClasses} />
      )}
      {(variant == 'success' || variant == 'success-small') && (
        <CiFaceSmile className={iconClasses} />
      )}
      <Text variant="medium" title={text} />
    </div>
  );
}
export default Notification;
