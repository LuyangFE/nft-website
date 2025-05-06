import React from 'react';

// 技术模块图标
export const techIcons = [
  // 数字化确权图标
  <svg key="digitalRights" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 0C44.8 0 0 44.8 0 100C0 155.2 44.8 200 100 200C155.2 200 200 155.2 200 100C200 44.8 155.2 0 100 0ZM100 180C55.8 180 20 144.2 20 100C20 55.8 55.8 20 100 20C144.2 20 180 55.8 180 100C180 144.2 144.2 180 100 180Z" fill="currentColor"/>
    <path d="M100 40C67.9 40 42 65.9 42 98C42 130.1 67.9 156 100 156C132.1 156 158 130.1 158 98C158 65.9 132.1 40 100 40ZM140 110H100V60C122.1 60 140 77.9 140 100C140 103.5 139.6 106.8 140 110Z" fill="currentColor"/>
  </svg>,
  
  // 版权存证图标
  <svg key="copyrightEvidence" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M90 40H110V60H90V40Z" fill="currentColor"/>
    <path d="M60 90H80V110H60V90Z" fill="currentColor"/>
    <path d="M120 90H140V110H120V90Z" fill="currentColor"/>
    <path d="M150 40H180V70H150V40Z" fill="currentColor"/>
    <path d="M20 40H50V70H20V40Z" fill="currentColor"/>
    <path d="M20 130H50V160H20V130Z" fill="currentColor"/>
    <path d="M150 130H180V160H150V130Z" fill="currentColor"/>
    <path d="M60 70H140V130H110V90H90V130H60V70Z" fill="currentColor"/>
  </svg>,
  
  // 版权溯源图标
  <svg key="copyrightTracing" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M180 20H20C14.5 20 10 24.5 10 30V170C10 175.5 14.5 180 20 180H180C185.5 180 190 175.5 190 170V30C190 24.5 185.5 20 180 20ZM170 160H30V40H170V160Z" fill="currentColor"/>
    <path d="M50 70H150V90H50V70Z" fill="currentColor"/>
    <path d="M50 110H150V130H50V110Z" fill="currentColor"/>
  </svg>
];

// 日历图标
export const calendarIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 9.09H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.6947 13.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.6947 16.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.9955 13.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.9955 16.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.29431 13.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 箭头图标
export const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 滚动提示箭头
export const scrollHintIcon = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 5L14.5 9.5L9.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 