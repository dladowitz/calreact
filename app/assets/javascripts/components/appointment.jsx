var Appointment = createReactClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.appointment.title}</h1>
        <h3>{this.props.appointment.appt_time}</h3>
      </div>
    );
  }
});
