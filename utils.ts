export const convertArrToObj = arr =>
  arr.reduce(function(acc, cur, i) {
    acc[cur.doctorId] = cur;
    return acc;
  }, {});
