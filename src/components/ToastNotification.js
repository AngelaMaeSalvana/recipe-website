import React, { useState, useEffect } from 'react';

const ToastNotification = ({toastMessage}) => {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    if (toastMessage) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  if (!isVisible) return null;

  const toastStyles = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: 'white',
    width: '300px',
    height: '75px',
    padding: '5px',
    color: 'black',
    borderLeft: '1px solid grey',
    borderTop: '1px solid grey',
    borderBottom: '1px solid grey',
    borderRight: '1px solid grey',
    borderRadius: '10px',
    display: 'grid',
    gridTemplateColumns: '5% 95%',
    alignItems: 'center',
    margin: '0',
    zIndex: 2000,
    opacity: toastMessage ? 1 : 0,
    transform: toastMessage ? 'translateX(0)' : 'translateX(100%)',
    animation: toastMessage
    ? 'bounceIn 0.7s ease forwards'
      : 'fadeOutRight 0.7s ease forwards',
    transition: 'opacity 0.7s ease',
  };

  return (
    <div style={toastStyles}>
      <div style={{width:'10px',height:'100%', backgroundColor:'#F16C4F', borderRadius:'20px'}}></div>
      <h5 style={{ margin: '0', padding:'5px 15px', width:'95%'}}>{toastMessage}</h5>
      <style>
        {`
          @keyframes bounceIn {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            60% {
              transform: translateX(-20px);
              opacity: 1;
            }
            80% {
              transform: translateX(10px);
            }
            100% {
              transform: translateX(0);
            }
          }

          @keyframes fadeOutRight {
            0% {
              transform: translateX(0);
              opacity: 1;
            }
            100% {
              transform: translateX(100%);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};


export default ToastNotification;
