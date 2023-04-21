const AddJob = () => {
    return(
        <>
<section className="container">
      <header>Registration Form</header>
      <form action="#" className="form">
        
        <div className="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address" required />
          <input type="text" placeholder="Enter street address line 2" required />
          <div className="column">
            <input type="text" placeholder="Enter your city" required />
          </div>
          <div className="column">
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