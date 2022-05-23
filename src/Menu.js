import React, { useState, useEffect } from 'react';
import { useClickOutside } from './useClickOutside';

export default function Menu(props) {
  const { position, renderToggle } = props;
  const [visible, setVisible] = useState(false);
  const ref = useClickOutside(() => setVisible(false));

  const onShow = () => setVisible(prev => !prev);

  return (
    <div ref={ref} className='fn-menu'>
      <div
        className={`menu-toggle ${visible && 'active-box'}`}
        onClick={onShow}>
        {renderToggle || 'click here'}
      </div>
      <div className={`menu-dropdown ${position} ${visible && 'menu-open'}`}>
        {/* <div onClick={onShow}>hello</div>
        <div>hello2</div> */}
        {props.children}
      </div>
    </div>
  );
}
