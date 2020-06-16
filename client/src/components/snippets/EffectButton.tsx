import React from 'react';
interface EffectButton {
    nameButton: string;
    disabled?: boolean;
}
const EffectButton: React.FC<EffectButton> = ({nameButton, disabled}) => {
  return (
    <div className="grBtnEffect">
        <div className="bgEffect"></div>
        <button disabled={disabled} type="submit" className="btnEffect">{nameButton}</button>
    </div>
  );
}

export default EffectButton;