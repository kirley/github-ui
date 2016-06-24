import Ember from 'ember';

const { Helper: { helper } } = Ember;

export function humanizeNumber(params/*, hash*/) {

  if (!params) {
    return '';
  }

  const [num] = params;
  if (parseInt(num, 10) > 1000) {
    return `${Math.round(num * 0.01) * 0.1}K`;
  } else {
    return `${num}`;
  }
}

export default helper(humanizeNumber);
