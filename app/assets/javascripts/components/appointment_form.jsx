var AppointmentForm = createReactClass({
  // submitForm: function() {
  //   console.log("Submiting Form.....");
  // },

  render: function() {
    return (
      <div>
        <h2>Make a New Appointment</h2>
        <form onSubmit={this.submitForm}>
          <input name="title" placeholder="Appointment Title" />
          <input name="appt_time" placeholder="Date and Time" />
          <input type="submit" value="Make Appointment" />
        </form>
      </div>
    );
  }
});
