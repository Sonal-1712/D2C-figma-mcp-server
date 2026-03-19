import React from 'react';
import FormScreen from '../components/FormScreen';
import styles from '../styles/formPage.module.scss';

const FormExamplePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Form Example</h1>
      <FormScreen />
    </div>
  );
};

export default FormExamplePage;
