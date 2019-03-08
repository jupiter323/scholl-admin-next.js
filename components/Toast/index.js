import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ToastWrapper from './styles';

class Toast extends React.Component { // eslint-disable-line
  render() {
    return (
      <ToastWrapper>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </ToastWrapper>
    );
  }
}

export default Toast;
