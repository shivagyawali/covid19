window.addEventListener('load', setup);

async function setup() {
    const ctx = document.getElementById('Chart').getContext('2d');
    const Data = await getData();
    const Chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Data.country,
            datasets: [
                {
                    label: 'No. of People Death',
                    data: deathData.date,
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

async function getData() {
    const response = await fetch('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv');
    const data = await response.text();
    const country = [];
    const date = [];
    const total_data = data.split(/\r?\n|\r/);
    for (let count = 0; count < 100; count++) {
        for (let i = 0; i < 2; i++) {
            let rows = total_data[count].split(",");
            rows.forEach(row => {
                const cols = rows;
                country.push(cols[1]);
                date.push(cols[rows.length - 1]);
            });

        }
    }
    return { country, date };
}
