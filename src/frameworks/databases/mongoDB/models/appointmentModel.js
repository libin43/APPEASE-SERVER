import mongoose from 'mongoose';

const { Schema } = mongoose;

const appointmentSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        required: true,
      },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
  },
);

const AppointmentModel = mongoose.model('Appointment', appointmentSchema);

export default AppointmentModel;