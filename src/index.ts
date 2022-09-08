// function omit(obj, fields) {
//   // eslint-disable-next-line prefer-object-spread
//   const shallowCopy = Object.assign({}, obj);
//   for (let i = 0; i < fields.length; i += 1) {
//     const key = fields[i];
//     delete shallowCopy[key];
//   }
//   return shallowCopy;
// }

// export default omit;

function omit<
  T extends {
    [key: string]: any;
  }
>(obj: T, fields: string[]) {
  return Object.keys(obj).reduce(
    (
      ret: {
        [key: string]: any;
      },
      key: string
    ) => {
      if (fields.includes(key)) {
        return ret;
      }
      ret[key] = obj[key];
      return ret;
    },
    {}
  );
}

export default omit;
