function findPeakGrid(mat: number[][]): number[] {
  let l = -1;
  let r = mat.length - 1;
  while(l + 1 < r) {
      const mid = Math.floor((l + r)/ 2);
      const max = Math.max.apply(null, mat[mid]);
      if(max > mat[mid + 1][mat[mid].indexOf(max)]) {
          r = mid;
      } else {
          l = mid;
      }
  }
  return [r, mat[r].indexOf(Math.max.apply(null, mat[r]))]
};

export {};