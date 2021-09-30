function solution(s) {
  var answer = "";

  var middle_index = s.length / 2;

  if (s.length % 2 === 0) {
    answer += s[middle_index - 1];
    answer += s[middle_index];
  } else {
    answer += s[Math.ceil(middle_index) - 1];
  }

  return answer;
}
