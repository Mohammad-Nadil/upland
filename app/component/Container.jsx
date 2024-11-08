import React from 'react'

const Container = ({ children, className }) => {
    return (
      <div className={`max-w-[1152px] mx-auto relative ${className} px-3 md:px-3 2xl:px-0 `}>
        {children}
        </div>
    );
  };

export default Container
