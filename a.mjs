import { B } from './b';

export class A {
  static B() {
    return B;
  }
}

console.log(A);
console.log(B.A() === A);
