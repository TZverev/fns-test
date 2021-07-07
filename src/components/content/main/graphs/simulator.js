
function Simulator(canv, state) {
    this.canvas = canv;
    this.ctx = this.canvas.getContext('2d');
    this.state = state;

    const drawPieSlice = (ctx, centerX, centerY, radius, startAngle, endAngle, color) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
    }

    const draw = () => {
        let totalValue = 0;
        let startAngle = - Math.PI / 2;

        for (let obj of this.state) {
            totalValue += obj.sum;
        }
        for (let obj of this.state) {
            let sliceAngle = 2 * Math.PI * obj.sum / totalValue;
            drawPieSlice(
                this.ctx,
                this.canvas.width / 2,
                this.canvas.height / 2,
                Math.min(this.canvas.width / 2.5, this.canvas.height / 2.5),
                startAngle,
                startAngle + sliceAngle,
                obj.color
            );
            startAngle += sliceAngle;
        }
        drawPieSlice(
            this.ctx,
            this.canvas.width / 2,
            this.canvas.height / 2,
            0.75 * Math.min(this.canvas.width / 2.5, this.canvas.height / 2.5),
            0,
            2 * Math.PI,
            "#fff"
        );

    }

    return {
        draw
    }
}

export default Simulator;