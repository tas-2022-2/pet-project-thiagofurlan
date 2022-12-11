export default class Trigonometry {
    circleArea(r) {
        return Math.PI * r^2;
    }
    cylinderVolume(r, h) {
        return this.circleArea(r) * h;
    }
}