const AddJob = () => {
    return(
        <>
<section className="container">
      <header>Registration Form</header>
      <form action="#" className="form">
        
        <div className="input-box address">
          <label>Job</label>
          <input type="text" placeholder="Enter Job Name" required />
          <input type="text" placeholder="Enter Job Description" required />
          <input type="text" placeholder="Enter Job Price" required />

          <div className="column">
            <input type="text" placeholder="Enter Address" required />
            <input type="text" placeholder="Enter your region" required />
            <input type="number" placeholder="Enter postal code" required />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </section>
        </>
    ) 
  };
  
  export default AddJob;