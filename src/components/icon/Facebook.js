import React from 'react';
import Icon from './Icon.js';

const vectors =
  'M8.65244566,0 L1.34752988,0 C0.603324486,0 0,0.603295596 0,1.34751999 L0,8.65243109 C0,9.39665548 0.603300023,9.99995107 1.34752988,9.99995107 L4.95027949,9.99995107 L4.95641963,6.42650958 L4.0280343,6.42650958 C3.90738408,6.42650958 3.80945974,6.3289529 3.80899495,6.20830357 L3.80454273,5.05643512 C3.80407794,4.9351253 3.90229583,4.83654119 4.02360654,4.83654119 L4.95030395,4.83654119 L4.95030395,3.72354374 C4.95030395,2.4319207 5.73915383,1.72862217 6.89137322,1.72862217 L7.83685801,1.72862217 C7.95782624,1.72862217 8.05592182,1.82669256 8.05592182,1.94768437 L8.05592182,2.91894576 C8.05592182,3.03988865 7.95789963,3.13793458 7.83698032,3.13800797 L7.25674866,3.13827705 C6.63013565,3.13827705 6.50880047,3.4360353 6.50880047,3.87300997 L6.50880047,4.83656565 L7.88568563,4.83656565 C8.01687929,4.83656565 8.11866874,4.95112381 8.10320829,5.08141139 L7.96668175,6.23327984 C7.95361865,6.34350813 7.86014653,6.42655851 7.74915909,6.42655851 L6.51494062,6.42655851 L6.50880047,10 L8.65249459,10 C9.39669998,10 10,9.3967044 10,8.65250448 L10,1.34751999 C9.99997554,0.603295596 9.39667551,0 8.65244566,0 Z'; // eslint-disable-line

export default function Facebook(props) {
  return <Icon viewBox="0 0 10 10" {...props} vectors={vectors} />;
}
