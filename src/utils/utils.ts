import { IDoctor, IClinic } from "./src/models";

export const convertArrToObj = (arr: Array<any>) =>
  arr.reduce(function(acc, cur, i) {
    acc[cur._id] = cur;
    return acc;
  }, {});

export function getName(string: string) {
  // FIXME: refactor login to avoid string values
  if (string.includes("clinic")) return "clinic";
  else if (string.includes("doctor")) return "doctor";
  else return "";
}

export type ISearch<K> = [Partial<K>, K[]];

export const getIdByFieldContent = (propsTuple: ISearch<IDoctor | IClinic>) => {
  let result;
  const [propKey, dataSet] = propsTuple;
  // doc case
  if ("fullName" in propKey) {
    result = (dataSet as IDoctor[]).filter(
      doc => doc.fullName === propKey.fullName
    );
  } else {
    // clinic case
    result = (dataSet as IClinic[]).filter(
      clinic => clinic.title === propKey.title
    );
  }
  return result[0]._id;
};
