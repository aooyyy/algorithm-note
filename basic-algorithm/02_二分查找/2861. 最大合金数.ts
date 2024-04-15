function maxNumberOfAlloys(n: number, k: number, budget: number, composition: number[][], stock: number[], cost: number[]): number {
  //所有合金只能有一种机器制造，可以计算每台机器可以制造的合金，取最大值
  // 如何计算台机器制作的合金 ？ 要最大合金，合金数目和 budget成正比，budget越大，合金数目越多， 考虑用二分解答

  function check(num, i) { // 在budget不超的情况下能否造出这些合金
      let money = 0;
      const composi = composition[i];
      for(let i = 0; i < cost.length; i++) {
          const sto = stock[i]
          const com = composi[i];
          const cos = cost[i];
          if(sto < com * num) {//该类型金属存货少于需要制作的合金数量, 需要购买
            money+= (com * num - sto) * cos;
            if(money > budget)  return false;
          }
      }
      return true

  }
  let ans = 0;
  for(let i = 0; i < k; i++) { //计算每台机器制作的合金
      // 1.确定二分边界
      let l = ans;  // 最坏情况一台造不出来
      let r = Math.min(...stock) + budget + 1; // 最好情况可以制作 min(store) + budget / composition[i] + 1
      while(l + 1 < r) {
          const mid = Math.floor((l + r)/ 2); // 合金数量
          if(check(mid, i)) { // 可以制作完，
              l = mid;
          } else {
              r = mid;
          }
      }
      ans = l;
  }
  return ans;
};