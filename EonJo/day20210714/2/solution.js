/*
  점프와 순간 이동 - https://programmers.co.kr/learn/courses/30/lessons/12980
*/
module.exports = function solution (n) {
  // k 만큼 점프하면 k 만큼 건전지 숫자 증가
  // 순간이동하면 이동한 거리 * 2 만큼 이동이 가능하다
  // 순간이동하려면 최소한 1의 거리는 이동해야 한다.

  // 만약 100의 거리만큼 이동한다고 하면
  // 50에서 순간이동 하면 된다
  // 50으로 가려면 25의 거리에서 순간이동
  // 25는 12.5 에서 순간이동 해야 하는데 소수점은 나올 수 없다
  // 1을 뺀 24는 12에서 점프해서 갈 수 있다 12 .. 6 .. 3
  // 3에서 1을 빼면 2
  // 2에서 1
  // 1 은 나눌 수 없으니 뺀다

  // 역순으로 정리하면
  // 0에서 1로 점프
  // 1 에서 2로 순간이동
  // 2 에서 3으로 점프
  // 3 에서 24까지 순간이동 3 * 2 ... 6 * 2 ... 12 * 2
  // 24에서 25로 점프
  // 25에서 50으로 순간이동
  // 50에서 100으로 순간이동
  // 점프 횟수 3회

  let ans = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      // 짝수인 경우 2로 나눈다
      n /= 2;
    } else {
      // 홀수인경우 2로 나눌 수 있게 1을 빼고 건전지를 추가한다
      n--;
      ans++;
    }
  }
  return ans;
};
