
window.addEventListener('load', setup);

async function setup() {
    const ctx = document.getElementById('confirm').getContext('2d');
    const confirmData = await getDataConfirmed();
    const confirm = new Chart(ctx, {
        type: 'line',
        data: {
            labels: confirmData.country,
            datasets: [
                {
                    label: 'No. of People confirmed',
                    data: confirmData.date,
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

async function getDataConfirmed() {
    const response = await fetch('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv');
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
