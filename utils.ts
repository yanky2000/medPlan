export const convertArrToObj = (arr: Array<any>) =>
  arr.reduce(function(acc, cur, i) {
    acc[cur.doctorId] = cur;
    return acc;
  }, {});
