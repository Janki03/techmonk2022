import cn from 'classnames';
import Image from 'next/image';
import styles from './input.module.scss';

const Input: React.FC<any> = (props: any) => {
  const {
    className,
    children,
    type,
    name,
    labeltext,
    lefticon,
    righticon,
    ...restProps
  } = props;
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <>
      <div className={cn(styles['form-group'], styles[classNames(className)])}>
        <input
          type={type}
          className={styles['form-control']}
          name={name}
          {...restProps}
        />
        {children}
        {lefticon ? (
          <span className={styles['left-icon']}>
            <Image
              src={lefticon}
              alt="Techmonk"
            />
          </span>
        ) : null}
      </div>
    </>
  );
};
export default Input;