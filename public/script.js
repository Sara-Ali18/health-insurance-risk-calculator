document.getElementById('riskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const bp = document.getElementById('bp').value.toLowerCase();
    const family = document.getElementById('family').value.toLowerCase();

    let risk = 'Low';
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    if (height < 60 || weight <= 0 || age <= 0) {
        alert('Please enter valid positive values. Height must be at least 60 cm.');
        return;
    }

    if (bmi > 30 || bp.includes('high') || family.includes('yes')) {
        risk = 'High';
    } else if (bmi > 25) {
        risk = 'Moderate';
    }

    document.getElementById('result').innerHTML = `
        <h2>Risk Level: ${risk}</h2>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>BMI:</strong> ${bmi}</p>
        <p><strong>Blood Pressure:</strong> ${bp}</p>
        <p><strong>Family History:</strong> ${family}</p>
    `;
});
