import React from 'react';
import type { FC, IframeHTMLAttributes } from 'react';

interface AlitaIframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  /**
   * 0~100
   */
  width?: number;

  /**
   * 0~100
   */
  height?: number;
}

const AlitaIframe: FC<AlitaIframeProps> = (props) => {
  const { width = 100, height = 100, style, ...rest } = props;
  (window as any).alitaFontScale = (window as any).alitaFontScale ?? 1;
  const stt = {
    border: 'none',
    ...style,
    width: `${1 / (window as any).alitaFontScale * 50 * width / 100}vw`,
    height: `${1 / (window as any).alitaFontScale * 50 * height / 100}vh`,
    transformOrigin: '0 0',
    transform: `scale(${(window as any).alitaFontScale / 0.5})`,
  };
  return <iframe style={stt} {...rest}></iframe>;
};
export default AlitaIframe;
