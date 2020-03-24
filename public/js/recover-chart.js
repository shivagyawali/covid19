window.addEventListener('load', setup);

async function setup() {
    const ctx = document.getElementById('recoverChart').getContext('2d');
    const recoverData = await getDataRecovered();
    const recoverChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: recoverData.country,
            datasets: [
                {
                    label: 'No. of People Recovered',
                    data: recoverData.date,
                    fill: false,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderWidth: 1
                }
            ]
        },
        options: {}
    });
}

async function getDataRecovered() {
    const response = await fetch('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv');
    const data = await response.text();
    const country = [];
    const date = [];
    const confirm_data = data.split(/\r?\n|\r/);
    for (let count = 0; count < 100; count++) {
        for (let i = 0; i < 2; i++) {
            let rows = confirm_data[count].split(",");
            rows.forEach(row => {
                const cols = rows;
                country.push(cols[1]);
                date.push(cols[rows.length - 1]);
            });

        }
    }
    return { country, date };
}
