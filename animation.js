

const ctx = document.getElementById('myChart').getContext('2d');



const numPoints = 100;
const labels = Array.from({ length: numPoints }, (_, i) => {
    const date = new Date(2024, 0, i + 1);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
});
const x = Array.from({ length: numPoints }, (_, i) => 80 + i * (40 / numPoints));

const yLines = [
    [99.37, 99.51, 100.41, 101.29, 101.8, 100.91, 101.47, 100.27, 100.85, 101.96, 102.15, 103.51, 104.19, 104.98, 104.75, 104.94, 104.97, 105.62, 104.91, 104.42, 103.76, 102.44, 103.49, 102.55, 102.23, 101.48, 102.06, 101.69, 102.59, 103.67, 104.29, 105.04, 104.3, 105.75, 105.38, 104.74, 104.62, 104.32, 104.49, 104.98, 105.1, 104.12, 104.55, 104.34, 104.57, 103.22, 102.75, 102.38, 101.82, 102.2, 102.03, 101.64, 100.78, 100.6, 102.08, 103.22, 102.94, 102.69, 103.04, 102.33, 100.97, 99.96, 100.7, 101.53, 102.15, 103.04, 101.71, 101.42, 101.54, 102.49, 101.03, 100.13, 99.24, 99.7, 100.93, 99.85, 101.33, 100.09, 101.13, 100.87, 101.27, 101.18, 99.84, 99.7, 99.8, 98.99, 100.26, 99.92, 101.04, 100.87, 102.11, 100.82, 100.52, 100.75, 100.74, 101.57, 100.23, 100.69, 102.18],    [101.31, 101.85, 102.01, 100.87, 99.85, 100.58, 101.1, 101.14, 101.83, 101.22, 102.08, 102.01, 102.05, 100.8, 99.82, 100.3, 98.9, 98.81, 98.74, 98.35, 98.29, 97.89, 99.09, 97.93, 97.11, 97.07, 96.53, 97.79, 96.83, 97.75, 97.96, 97.15, 97.66, 97.35, 98.2, 97.35, 98.77, 100.01, 99.91, 100.55, 99.53, 99.63, 101.09, 99.8, 99.26, 99.25, 99.77, 101.23, 101.92, 103.04, 102.66, 101.29, 100.39, 100.2, 101.23, 100.51, 100.48, 100.95, 102.42, 100.92, 101.3, 100.24, 98.79, 98.56, 98.18, 97.02, 96.6, 97.87, 96.74, 96.18, 96.74, 96.21, 97.63, 98.68, 99.1, 100.55, 101.26, 101.04, 102.53, 101.18, 100.83, 100.0, 100.43, 101.75, 102.93, 101.86, 103.06, 104.04, 103.9, 102.99, 103.91, 103.32, 104.04, 102.84, 104.09, 104.09, 105.19, 105.85, 105.81],
    [99.4, 100.34, 101.03, 99.58, 100.01, 99.5, 99.02, 100.23, 100.13, 101.38, 100.56, 102.04, 101.68, 101.74, 100.83, 99.86, 101.35, 99.95, 101.18, 101.07, 99.58, 99.6, 98.71, 97.83, 98.8, 98.19, 96.88, 98.02, 97.17, 96.89, 96.81, 96.79, 96.59, 97.74, 99.2, 100.47, 100.5, 101.91, 102.23, 103.73, 102.47, 101.09, 100.11, 100.99, 99.98, 101.05, 100.19, 100.37, 99.98, 101.28, 101.17, 100.21, 99.62, 99.34, 98.35, 99.6, 99.88, 100.76, 99.46, 97.98, 98.11, 97.78, 97.87, 98.32, 96.91, 97.98, 97.27, 97.23, 97.47, 97.11, 95.99, 95.1, 94.59, 95.11, 95.42, 96.76, 96.72, 97.21, 95.76, 97.03, 95.76, 94.26, 94.58, 95.98, 96.03, 97.09, 97.5, 98.03, 96.9, 97.36, 96.87, 96.1, 95.31, 95.36, 95.52, 94.42, 94.74, 95.89, 97.07],
    [100.19, 98.89, 97.98, 98.18, 96.93, 97.51, 98.5, 98.75, 99.89, 99.47, 99.15, 100.06, 99.68, 99.91, 100.36, 99.63, 98.68, 100.05, 100.52, 100.2, 99.96, 99.07, 100.13, 98.99, 97.59, 98.49, 99.8, 98.33, 97.34, 96.9, 96.06, 95.33, 94.64, 95.19, 94.16, 94.44, 93.67, 92.45, 93.07, 94.46, 94.65, 94.11, 92.94, 93.56, 94.15, 95.3, 94.12, 94.58, 95.29, 95.94, 96.11, 97.3, 97.4, 98.28, 97.84, 98.32, 97.91, 96.53, 95.05, 94.54, 94.35, 94.43, 93.82, 93.22, 93.69, 92.46, 93.76, 94.2, 93.68, 92.99, 93.97, 94.39, 95.82, 94.93, 95.47, 95.22, 96.17, 97.12, 97.45, 96.46, 97.83, 96.76, 96.98, 96.12, 95.55, 96.29, 96.1, 96.66, 97.4, 98.58, 98.91, 98.05, 97.34, 96.37, 97.8, 98.94, 98.15, 98.34, 99.27],
];

const yFinal = [101.08, 102.49, 101.37, 102.23, 101.86, 102.46, 102.91, 103.23, 102.3, 103.04, 104.31, 103.15, 102.46, 101.11, 102.15, 102.16, 101.6, 102.46, 101.07, 100.7, 100.31, 99.89, 100.63, 99.53, 99.72, 100.02, 100.78, 100.97, 102.4, 101.01, 102.36, 102.17, 103.02, 102.77, 103.9, 104.71, 105.59, 105.59, 104.36, 103.58, 104.1, 102.63, 102.21, 101.74, 102.44, 102.33, 102.74, 102.86, 101.7, 102.5, 102.01, 101.8, 101.39, 102.76, 102.69, 101.72, 102.55, 101.43, 100.41, 101.01, 99.77, 100.75, 100.56, 101.43, 100.25, 101.7, 101.73, 101.17, 101.32, 101.3, 100.23, 101.42, 101.34, 100.55, 101.42, 101.6, 101.68, 102.84, 103.31, 103.06, 101.79, 102.42, 101.38, 100.56, 100.43, 99.78, 100.98, 100.89, 100.51, 100.73, 100.3, 99.5, 100.69, 101.43, 101.22, 102.67, 101.45, 101.28, 101.64, 101.93, 102.86, 102.8, 102.5, 101.55, 100.77, 99.47, 100.94, 101.43, 99.99, 99.19, 98.36, 98.26, 96.86, 96.94, 97.66, 98.98, 98.21, 98.73, 99.18, 100.37, 99.78, 98.81, 97.79, 98.97, 98.45, 97.71, 96.94, 98.28, 97.84, 98.53, 98.93, 100.05, 100.14, 101.44, 101.56, 102.53, 102.55, 101.27, 102.26, 102.73, 104.04, 102.66, 103.89, 103.03, 101.61, 102.0, 101.22, 102.0, 102.18];

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color+"20";
}

const datasets = yLines.map((yLine, index) => ({
    
    label: `Line ${index + 1}`,
    data: [],
    borderColor: "Yellow" ,
    borderWidth: 5,
    fill:{
        target: 'origin',
        above: SUB_COLOR,

    },
}));

datasets.push({
    label: 'Final Line',
    data: [],
        fill:{
        target: 'origin',
        above: SUB_COLOR,
    },
});

const config = {
    type: 'line',
    data: {
        labels: labels,
        datasets: datasets,
    },
    options: {
        scales: {
            x: {
                type: 'category',
                labels: labels,
                display: false
            },
            y: {
                min: 80,
                max: 120,
                display: false
            },
        },
        elements:{
            point:{
                pointBackgroundColor:"#368a81",
                pointBorderWidth: 1,
                pointRadius: 0.1
            }
        },
        plugins: {
            label:{
                display: false
            },
            title:{
                display:false,
                text:'Cumulative Profit'
            },
            legend:{
                display: false
            },
            // middleTitle: {
            //     display: true,
            //     text: 'TheRallyFinder'
            // }
        },
        animation: {
            duration: 0,
        },
    },
    plugins: [{
        id: 'middleTitle', // Ensure this ID matches the one used in the options
        beforeDraw: function(chart) {
            var ctx = chart.ctx;
            var yScale = chart.scales.y;
            // Make sure the middle title display is enabled and the yScale is defined
            if (chart.options.plugins.middleTitle && chart.options.plugins.middleTitle.display && yScale) {
              var x = (yScale.maxWidth);
              var y = (yScale.maxHeight/3);
              ctx.save();
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = "#f5f5f5"; // Customize as needed
              ctx.font = yScale.maxWidth/4 + 'px myFirstBold'; // Customize as needed
              ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
              ctx.shadowBlur = 40;
              ctx.shadowOffsetX = 10;
              ctx.shadowOffsetY = 10;
              ctx.fillText(chart.options.plugins.middleTitle.text, x, y);
              ctx.restore();
            }
          }
    }]
};

const myChart = new Chart(ctx, config);

let frame = 0;
const showLinesSteps = numPoints * yLines.length;
const interpSteps = 6;
const totalFrames = showLinesSteps + numPoints * interpSteps;

function animate() {
    if (frame < showLinesSteps) {
        const lineIndex = Math.floor(frame / numPoints);
        const pointIndex = frame % numPoints;

        datasets[lineIndex].hidden = false;
        datasets[lineIndex].data.push({ x: x[pointIndex], y: yLines[lineIndex][pointIndex] });

    } else {
        const adjustedFrame = frame - showLinesSteps;
        const pointIndex = Math.floor(adjustedFrame / interpSteps);
        const stepWithinPoint = adjustedFrame % interpSteps;
        const factor = (stepWithinPoint + 1) / interpSteps;

        for (let i = 0; i < yLines.length; i++) {
            const interpolatedY = (1 - factor) * yLines[i][pointIndex] + factor * yFinal[pointIndex];
            datasets[i].data[pointIndex] = { x: x[pointIndex], y: interpolatedY };
        }

        const finalXData = x.slice(0, pointIndex + 1);
        const finalYData = yFinal.slice(0, pointIndex + 1);
        datasets[datasets.length - 1].data = finalXData.map((x, i) => ({ x, y: finalYData[i] }));
    }

    myChart.update();

    if (frame < totalFrames) {
        frame++;
        requestAnimationFrame(animate);
    }
}

requestAnimationFrame(animate);
