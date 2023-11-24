export default function appointmentRepository(repoDB){
    const newAppointment = (appointmentEntity) => repoDB.newAppointment(appointmentEntity);

    const existingAppointments = (date, startTime, endTime) => repoDB.existingAppointments(date, startTime, endTime)

    return{
        newAppointment,
        existingAppointments,
    }
}