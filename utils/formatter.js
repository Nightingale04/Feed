import moment from 'moment';

function formatNumber(number) {
  return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
}

function formatDate(date) {
  return moment(date).fromNow();
}

export { formatNumber, formatDate };
