function Summary({ salary, totalSavedThisYear, contributionPerPaycheck }) {
    return (
      <div className="summary-card">
        <p>Annual Salary: ${salary.toLocaleString()}</p>
        <p>Total Saved This Year: ${Math.round(totalSavedThisYear).toLocaleString()}</p>
        <p>Your Contribution per Paycheck: ${Math.round(contributionPerPaycheck).toLocaleString()}</p>
      </div>
    );
  }
  
  export default Summary;