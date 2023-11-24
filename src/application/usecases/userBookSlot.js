import appointmentEntity from "../../entities/appointment.js";

export default async function userBookSlot(
    email,
    date,
    startTime,
    endTime,
    dbUserRepo,
    dbAppointmentRepo
) {
    console.log(email, date, startTime, endTime, 'in use case');
    const user = await dbUserRepo.userEmail(email, 'firstName email role')
    if (!user) throw new Error('User not found')
    const userId = user?._id

    const body = {
        "userId": user?._id,
        "date": date,
        "startTime": startTime,
        "endTime": endTime,
    }
    console.log(body);

    const appointmentExist = await dbAppointmentRepo.existingAppointments(date, startTime, endTime)

    if (appointmentExist) {
        throw new Error('Appointment already exist')
    }

    return dbAppointmentRepo.newAppointment(appointmentEntity(
        userId,
        date,
        startTime,
        endTime,
    ))

}