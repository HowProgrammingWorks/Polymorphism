'use strict';

const getTypeName = (value) => {
  if (value instanceof Date) return 'Date';
  if (typeof value === 'number') return 'number';
  if (typeof value === 'string') return 'string';
  return value.constructor?.name || typeof value;
};

const adhocHandlers = new Map();

const formatDate = (...args) => {
  if (args.length === 1) args.push('en-US');
  const signature = `(${args.map(getTypeName).join(', ')})`;
  const handler = adhocHandlers.get(signature);
  if (!handler) {
    throw new TypeError(`No handler for signature ${signature}`);
  }
  return handler(...args);
};

adhocHandlers.set('(Date, string)', (date, locales) =>
  date.toLocaleDateString(locales),
);

adhocHandlers.set('(number, string)', (timestamp, locales) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString(locales);
});

adhocHandlers.set('(string, string)', (str, locales) => {
  const date = new Date(Date.parse(str));
  return date.toLocaleDateString(locales);
});

console.log('formatDate(Date):', formatDate(new Date('2025-10-31')));
console.log('formatDate(string):', formatDate('2025-10-31T12:30:00Z'));
console.log('formatDate(timestamp):', formatDate(Date.now()));
