const subjects = [
    { name: 'PPM', credits: 6, gp: 0 },
    { name: 'HR', credits: 6, gp: 0 },
    { name: 'Scripting', credits: 6, gp: 0 },
    { name: 'A4I', credits: 9, gp: 0 },
    { name: 'English', credits: 3, gp: 0 }
];

function mapScoreToGP(score) {
    if (score >= 94) return 4.0;
    else if (score >= 91) return 3.7;
    else if (score >= 88) return 3.4;
    else if (score >= 85) return 3.1;
    else if (score >= 81) return 2.8;
    else if (score >= 78) return 2.5;
    else if (score >= 74) return 2.2;
    else if (score >= 71) return 1.9;
    else if (score >= 68) return 1.6;
    else if (score >= 64) return 1.3;
    else if (score >= 61) return 1.0;
    else if (score >= 56) return 0.8;
    else if (score >= 51) return 0.5;
    else return 0.0;
}

function displaySubjects() {
    const subjectList = document.getElementById('subjectList');
    subjectList.innerHTML = '';
    subjects.forEach((subject, index) => {
        const div = document.createElement('div');
        div.classList.add('subject-item');
        div.innerHTML = `
            <label>${subject.name}</label>
            <input type="number" placeholder="Score" oninput="updateSubject(${index}, this.value)" step="0.01">
        `;
        subjectList.appendChild(div);
    });
}

function updateSubject(index, value) {
    const score = parseFloat(value);
    if (!isNaN(score)) {
        subjects[index].gp = mapScoreToGP(score);
        calculateGPA();
    }
}

function calculateGPA() {
    let totalCredits = 0;
    let totalWeightedScore = 0;

    subjects.forEach(subject => {
        totalCredits += subject.credits;
        totalWeightedScore += subject.gp * subject.credits;
    });

    const gpa = totalWeightedScore / totalCredits;
    document.getElementById('result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
}

displaySubjects();
