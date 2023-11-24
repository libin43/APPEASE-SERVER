import AppointmentModel from "../models/appointmentModel.js";

export default function appointmentRepoMongoDB() {
    const newAppointment = (appointmentEntity) => {
        const newAppointment = new AppointmentModel({
            userId: appointmentEntity.getUserId(),
            date: appointmentEntity.getSlotDate(),
            startTime: appointmentEntity.getSlotStartTime(),
            endTime: appointmentEntity.getSlotEndTime(),
        })
        return newAppointment.save();
    }

    const existingAppointments = async(date, startTime, endTime) => {
        const appointment = await AppointmentModel.findOne({
            date: new Date(date),
            $or: [
                { startTime: { $lt: new Date(endTime) }, endTime: { $gt: new Date(startTime) } },
              ],
        })
        return appointment
    }

    return {
        newAppointment,
        existingAppointments,
    }
}