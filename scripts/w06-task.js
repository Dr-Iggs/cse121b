document.addEventListener('DOMContentLoaded', async function() {
    const TESTER = document.getElementById('basic_histogram');

    if (TESTER) {
        const minuteList = await getCrashMinutes();

        // Convert strings to integers
        let accidents = minuteList.Accidents.map(accident => parseInt(accident));

        // Plot the initial data
        plotHistogram(accidents);

        // Update the plot when the dropdown selection changes
        document.getElementById('filtered').addEventListener('change', function() {
            const filtered = this.value;
            let accident_manip = [];
            if (filtered === 'double-values') {
                accident_manip = accidents.map(function(x) { return x * 2; });
            } else {
                accident_manip = accidents;
            }

            // Update the plot with the new data
            plotHistogram(accident_manip, minuteList.Minute);
        });

    } else {
        console.error("DOM element with ID 'basic_histogram' not found.");
    }
});

async function getCrashMinutes() {
    const response = await fetch("https://run.mocky.io/v3/86197a38-a096-417c-92fb-5719e5dfec7a");
    const crashMinutes = await response.json();
    return crashMinutes;
}

function plotHistogram(accidents, hours) {
    document.getElementById('max-height').textContent = `The most dangerous hour had ${Math.max(...accidents)} accidents.`;

    Plotly.newPlot('basic_histogram', [{
        x: hours, // Generating x-axis values as simple sequence
        y: accidents,
        type: 'bar'
    }], {
        title: {text: 'Accidents by hour (sample data)' },
        xaxis: {title: 'Hour of the day'},
        yaxis: {title: 'Number of accidents',
                range: [0,8]
                } 
    });
}
