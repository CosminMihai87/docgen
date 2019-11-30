/**
 * @author: Cosmin Mihai <cosmin.mihai2612@gmail.com>
 */

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};
