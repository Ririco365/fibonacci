'use strict';
const memo = new Map(); // 連想配列。key:順番、value:フィボナッチの値
memo.set(0, 0);
memo.set(1, 1);
function fib(n){
    //もし連想配列が、n をキーとした答えを持っていればその値をそのまま関数の値として返す
    if (memo.has(n)) {
        return memo.get(n);
    }
    //そうでない場合は再帰関数を計算して値を求め、それを連想配列に格納した後に返す
    const value = fib(n - 1) + fib (n - 2);
    memo.set(n, value);
    return value; 
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}