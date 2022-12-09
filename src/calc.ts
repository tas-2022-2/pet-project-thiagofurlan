import Trigonometry from "./trigonometry";

export default class Calc {

    sum(a: number, b: number) {
        return a + b;
    }
    sub(a: number, b: number) {
        return a - b;
    }
    div(a: number, b: number) {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    }
    mul(a: number, b: number) {
        return a * b;
    }
    circleArea(r: number) {
        const trigonometry = new Trigonometry();
        return trigonometry.circleArea(r);
    }
    cylinderVolume(r: number, h: number) {
        const trigonometry = new Trigonometry();
        return trigonometry.cylinderVolume(r, h);
    }
}